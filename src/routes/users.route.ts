import { celebrate, Segments } from "celebrate";
import { UsersController } from "../controllers/users.controller";
import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { newUserSchema } from "../models/users.schema";
import { authMiddleware } from "../middlewares/auth.middleware";

export const userRoutes = Router();

// requer autenticação

userRoutes.get("/", authMiddleware, expressAsyncHandler(UsersController.findAllUsers));
userRoutes.get("/me", authMiddleware, expressAsyncHandler(UsersController.getCurrentUser));

userRoutes.post("/", celebrate({ [Segments.BODY]: newUserSchema }), expressAsyncHandler(UsersController.createUser));
