import { Router } from "express";
import {
    getProjects,
    createProject,
    updateProject,
    deleteProject
} from "../controllers/projectController";
import { authMiddleware } from "../middlewares/authMiddlewares";

const router = Router();

//Public
router.get("/", getProjects);

//Private
router.post("/", authMiddleware, createProject);
router.put("/:id", authMiddleware, updateProject);
router.delete("/:id", authMiddleware, deleteProject);


export default router;