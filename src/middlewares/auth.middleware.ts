import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { TokenPayload } from "../models/model.types";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeaders = req.headers.authorization;

    if (!authHeaders) {
        return res.status(401).json({ message: "Token não fornecido" });
    }
    // Bareer |token
    const [bearer, token] = authHeaders.split(" ");
    if (bearer !== "Bearer" || !token) {
        return res.status(401).json({ message: "Token malformatado" });
    }
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET as string) as TokenPayload;
        // evitar erros caso por algum motivo o payload não tem o sub ou é uma string
        if (typeof payload !== "object" || !("sub" in payload)) {
            return res.status(401).json({ message: "Token inválido" });
        }

        if (!payload.sub) {
            return res.status(401).json({ message: "Token inválido" });
        }
        req.user = { id: payload.sub };
        next();
    } catch (error) {
        console.error("Erro na verificação do token", error);
        return res.status(401).json({ message: "Token inválido ou expirado" });
    }
};
