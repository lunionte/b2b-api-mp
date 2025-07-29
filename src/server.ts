import express from "express";
import * as dotenv from "dotenv";
import { userRoutes } from "./routes/users.route";
import { errors } from "celebrate";

const app = express();

dotenv.config();
app.use(express.json());

app.use("/api/v1/users", userRoutes);

app.use(errors());
const port = process.env.PORT;
app.listen(port, () => {
    console.log("🟢 Servidor rodando na porta", port);
});
