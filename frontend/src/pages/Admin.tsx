import { useEffect, useState } from "react";
import { api } from "../services/api";

interface Project {
    _id: string;
    title: string;
    description: string;
    techStack?: string[];
    githubLink?: string;
    liveLink?: string;
}

export function Admin() {
    const [projects, setProjects] = useState<Project[]>([]);

    async function loadProjects() {
        const res = await api.get("/projects");
        setProjects(res.data);
    }

    async function deleteProject(id: string) {
        const token = localStorage.getItem("token");
        await api.delete(`/projects/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        loadProjects();
    }

    useEffect(() => {
        loadProjects();
    }, []);

    return (
        <div className="p-10">
            <h2 className="text-3xl font-bold mb-6">Painel Admin</h2>

            {projects.map(p => (
                <div key={p._id} className="bg-slate-800 p-4 mb-4 rounded flex justify-between">
                    <span>{p.title}</span>
                    <button
                        onClick={() => deleteProject(p._id)}
                        className="text-red-400"
                    >
                        Deletar
                    </button>
                </div>
            ))}
        </div>
    );
}
