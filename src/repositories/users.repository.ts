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

    async findAllUsers() {
        const users = await prisma.user.findMany();
        return users;
    }
}
