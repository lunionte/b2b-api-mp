import { Router } from "express";
import { CountriesController } from "../controllers/countries.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

export const countriesRoutes = Router();

countriesRoutes.get("/countries", authMiddleware, CountriesController.getCountries);
