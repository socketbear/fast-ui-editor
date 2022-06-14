import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

let time = 0;

export default defineEventHandler((event) => {
  event.context.prisma = prisma;
  event.context.callCount = ++time;
});
