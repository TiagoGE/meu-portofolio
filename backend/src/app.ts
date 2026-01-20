import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import projectRoutes from "./routes/projectRoutes";
import certificateRoutes from "./routes/certificateRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API do Portfólio está rodando!");
});

app.use("/auth", authRoutes);
app.use("/projects", projectRoutes);
app.use("/certificates", certificateRoutes);

export default app;