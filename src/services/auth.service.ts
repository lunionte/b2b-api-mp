import { UsersRepository } from "../repositories/users.repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export class AuthService {
    constructor(private userRepository: UsersRepository = new UsersRepository()) {}

    async login(email: string, password: string) {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new Error("Email inválido");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            throw new Error("Senha inválida");
        }

        const token = jwt.sign(
            {
                sub: user.id,
            },
            process.env.JWT_SECRET as string,
            {
                expiresIn: "2h",
            }
        );
        return token;
    }
}
