import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// import {Project} from '@/types/editor/interfaces'
let callCount: number = 0;

interface Page {
  _page?: string,
  _limit?: string
}

export default defineEventHandler(async (event) => {
  const {_page, _limit}: Page = useQuery(event)
  const take = parseInt(_limit ? _limit : '10')
  const skip = parseInt(_page ? _page : '0') * take

  // console.log({page, skip, take})

  const [total, projs] = await prisma.$transaction([
    prisma.project.count(),
    prisma.project.findMany({
      skip,
      take
    })
  ])
  // const projs: Project[] = await prisma.project.findMany();
  appendHeader(event.res, 'call-count', ++callCount)
  appendHeader(event.res, 'total', total)

  return projs
});
