import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { userRoutes } from "./routes/users.route";
import { errors } from "celebrate";
import { authRoutes } from "./routes/auth.route";
import { countriesRoutes } from "./routes/countries.route";
import { errorHandler } from "./middlewares/error-handler.middleware";

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1", countriesRoutes);
app.use(errors());
app.use(errorHandler);
const port = process.env.PORT;
app.listen(port, () => {
    console.log("🟢 Servidor rodando na porta", port);
});
