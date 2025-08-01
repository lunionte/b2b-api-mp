import { Request, Response } from "express";
import { CountriesService } from "../services/countries.service";

export class CountriesController {
    static async getCountries(req: Request, res: Response) {
        const { name } = req.query;
        const country = await new CountriesService().getCountry(name as string);
        res.json(country);
    }
}
