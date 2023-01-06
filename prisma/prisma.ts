import { PrismaClient } from "@prisma/client";

declare global {
  let prisma: PrismaClient;
}

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  const globalWithPrisma = global as typeof globalThis & {
    prisma: PrismaClient;
  };
  prisma = globalWithPrisma.prisma;
}

export default prisma;
