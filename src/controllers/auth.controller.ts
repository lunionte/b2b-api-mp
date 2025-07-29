import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

export class AuthController {
    static async login(req: Request, res: Response) {
        const { email, password } = req.body;
        const token = await new AuthService().login(email, password);

        res.json({ token: token });
    }
}
