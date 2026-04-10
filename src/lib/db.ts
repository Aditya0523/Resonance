import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { env } from "./env";

// SINGLETON PATTERN

const adapter = new PrismaPg({
  connectionString: env.DATABASE_URL,
});

/* File saved → module reloads → new PrismaClient() created → repeat
= 100s of open DB connections = your DB crashes

in non-prod env as HMR is there
to prevent connection pool exhaustion
 */
const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export { prisma };
