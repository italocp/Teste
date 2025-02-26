import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getUserById(userId: string) {
    const user = await prisma.usuarios.findUnique({
        where: {
            id: userId,
        },
    });
    return user;
}

export default getUserById;