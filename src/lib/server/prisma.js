import { PrismaClient } from "@prisma/client";

const prisma = global.prisma || new PrismaClient();

switch (process.env.NODE_ENV) {
    case "development": {
        global.prisma = prisma;
        break;
    }
}

export { prisma }