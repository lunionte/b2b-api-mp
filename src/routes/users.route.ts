import { celebrate, Segments } from "celebrate";
import { UsersController } from "../controllers/users.controller";
import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { newUserSchema } from "../models/users.schema";

export const userRoutes = Router();

userRoutes.get("/", expressAsyncHandler(UsersController.findAllUsers));
userRoutes.post("/", celebrate({ [Segments.BODY]: newUserSchema }), expressAsyncHandler(UsersController.createUser));
