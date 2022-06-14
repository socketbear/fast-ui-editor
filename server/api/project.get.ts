// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
// import { usePrisma } from "../utils/prisma";
// const po = usePrisma();

export default defineEventHandler(async (event) => {
  // return prjs;
  console.log("count :>> ", event.context.callCount);

  const projs = await event.context.prisma.project.findMany();
  return [event.context.callCount, ...projs];
});
