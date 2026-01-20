import { useEffect, useState } from "react";
import { api } from "../services/api";

const getTechBadgeStyle = (tech: string) => {
  const techLower = tech.toLowerCase();

  switch (techLower) {
    case 'python':
      return 'bg-yellow-900/30 text-yellow-400 border-yellow-700/50';
    case 'node.js':
    case 'express':
    case 'typescript':
      return 'bg-blue-900/30 text-blue-400 border-blue-700/50';
    case 'java':
    case 'android sdk':
      return 'bg-red-900/30 text-red-400 border-red-700/50';
    case 'mongodb':
    case 'mssql':
      return 'bg-green-900/30 text-green-400 border-green-700/50';
    case 'tkinter':
      return 'bg-cyan-900/30 text-cyan-400 border-cyan-700/50';
    default:
      return 'bg-slate-800 text-slate-400 border-slate-700';
  }
};

interface Project {
  _id: string;
  title: string;
  description: string;
  techStack?: string[];
  githubLink?: string;
  liveLink?: string;
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    api.get("/projects")
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="projects" className="bg-[#0B1120] py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Projetos</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(project => (
            <div key={project._id} className="bg-slate-900 p-6 rounded-xl border border-slate-700 flex flex-col">
              <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
              <p className="text-slate-400 mt-2 flex-grow">{project.description}</p>

              {/* LISTA DE TECHSTACKs (TAGS) */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack?.map((tech) => (
                  <span
                    key={tech}
                    className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md border ${getTechBadgeStyle(tech)}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="mt-6 flex gap-4 border-t border-slate-800 pt-4">
                <a href={project.githubLink} target="_blank" rel="noreferrer"
                  className="text-sm font-medium hover:text-blue-400 transition-colors">
                  GitHub
                </a>

                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noreferrer"
                    className="text-sm font-medium hover:text-green-400 transition-colors">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
