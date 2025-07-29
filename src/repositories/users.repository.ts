import { PrismaClient } from "@prisma/client";
import { IUsersModel } from "../models/model.types";

const prisma = new PrismaClient();

export class UsersRepository {
    async createUser(user: IUsersModel) {
        await prisma.user.create({
            // apenas o necessário que deve ser enviado no post, o que ele cria automatico não precisa
            data: {
                email: user.email,
                name: user.name,
                password: user.password,
            },
        });
    }

    async findById(id: string) {
        const user = await prisma.user.findUnique({
            where: { id },
        });
        return user;
    }

    async findAllUsers() {
        const users = await prisma.user.findMany();
        return users;
    }

    async findByEmail(email: string) {
        return await prisma.user.findUnique({
            where: { email },
            select: { id: true, email: true, password: true },
        });
    }
}
