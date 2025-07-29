import { IUsersModel, toUsersDto } from "../models/model.types";
import { UsersRepository } from "../repositories/users.repository";
import bcrypt from "bcrypt";

export class UserService {
    constructor(private userRepository = new UsersRepository()) {}
    async createUser(user: IUsersModel) {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        await this.userRepository.createUser(user);
    }

    async getCurrentUser(id: string) {
        const user = await this.userRepository.findById(id);
        return {
            name: user?.name,
            email: user?.email,
            isConfirmedEmail: user?.isEmailConfirmed,
            createdAt: user?.createdAt,
        };
    }

    async findAllUsers() {
        const users = await this.userRepository.findAllUsers();
        return toUsersDto(users);
    }
}
