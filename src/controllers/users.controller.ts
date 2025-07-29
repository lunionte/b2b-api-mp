import { Request, Response } from "express";
import { UserService } from "../services/users.service";

export class UsersController {
    static async createUser(req: Request, res: Response) {
        await new UserService().createUser(req.body);
        res.json({ message: "Usuário criado com sucesso!" });
    }

    static async getCurrentUser(req: Request, res: Response) {
        const user = await new UserService().getCurrentUser(req.user!.id);
        res.json(user);
    }

    static async findAllUsers(req: Request, res: Response) {
        const users = await new UserService().findAllUsers();
        res.json(users);
    }
}
