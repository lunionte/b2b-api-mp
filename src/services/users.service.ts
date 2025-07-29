import { IUsersModel } from "../models/model.types";
import { UsersRepository } from "../repositories/users.repository";

export class UserService {
    constructor(private userRepository = new UsersRepository()) {}
    async createUser(user: IUsersModel) {
        await this.userRepository.createUser(user);
    }

    async findAllUsers() {
        const users = await this.userRepository.findAllUsers();
        return users;
    }
}
