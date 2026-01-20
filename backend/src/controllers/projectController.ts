import { Request, Response } from "express";
import Project from "../models/Project";

//Get - public
export async function getProjects(req: Request, res: Response) {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects)
    } catch (error) {
        res.status(500).json({ message: "Error fetching projects." })
    }
}

//Post - admin
export async function createProject(req: Request, res: Response) {
    try {
        const project = await Project.create(req.body);
        res.status(201).json(project);
    } catch (error) {
        res.status(400).json({ message: "Error creating project. Check your fields." })
    }

}

//Put - admin
export async function updateProject(req: Request, res: Response) {
    try {
        const project = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        )
        if (!project) return res.status(404).json({ message: "Project not found." });

        res.json(project);
    } catch (error) {
        res.status(400).json({ message: "Invalid ID or data." });
    }
}

export async function deleteProject(req: Request, res: Response) {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        if (!project) return res.status(404).json({ message: "Project not found." });

        res.status(200).json({ message: "Project Deleted." });
    } catch (error) {
        res.status(400).json({ message: "Invalid ID." });

    }

}