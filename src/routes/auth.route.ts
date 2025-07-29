import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { celebrate, Segments } from "celebrate";
import { loginSchema } from "../models/users.schema";

export const authRoutes = Router();

authRoutes.post("/login", celebrate({ [Segments.BODY]: loginSchema }), AuthController.login);
