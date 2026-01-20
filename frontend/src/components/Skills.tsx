// const skillGroups = [
//     {
//         title: "Linguagens & Frameworks",
//         items: [
//             { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
//             { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
//             { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
//             { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
//             { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
//             { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
//         ]
//     },
//     {
//         title: "Cloud & Databases",
//         items: [
//             { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
//             { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
//             { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
//             { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
//             { name: "MSSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
//         ]
//     }
// ];

// export function Skills() {
//     return (
//         <section id="skills" className="py-24 bg-[#0B1120]">
//             <div className="max-w-5xl mx-auto px-6">
//                 <div className="mb-12">
//                     <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Skills & Technologies</h2>
//                 </div>

//                 {skillGroups.map((group) => (
//                     <div key={group.title} className="mb-16">
//                         <h3 className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-8 border-b border-slate-800 pb-2">
//                             {group.title}
//                         </h3>

//                         <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
//                             {group.items.map((skill) => (
//                                 <div
//                                     key={skill.name}
//                                     className="group relative flex flex-col items-center justify-center aspect-square bg-slate-800/20 border border-slate-800 
//                hover:border-emerald-500/50 hover:bg-emerald-500/5 
//                hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] 
//                transition-all duration-300 rounded-xl p-4"
//                                 >
//                                     {/* ÍCONE COM COR TOTAL E GLOW NO HOVER */}
//                                     <img
//                                         src={skill.icon}
//                                         alt={skill.name}
//                                         className="w-12 h-12 opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-all duration-500"
//                                     />

//                                     {/* TOOLTIP (NOME AO PASSAR O MOUSE) */}
//                                     <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-200 bg-emerald-500 text-slate-900 text-sm font-black font-bold px-2 py-1 rounded shadow-lg pointer-events-none">
//                                         {skill.name}
//                                         <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-emerald-500"></div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }


const allSkills = [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "MSSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", isDark: true },
    { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
];

export function Skills() {
    return (
        <section id="skills" className="py-24 bg-[#0B1120]">
            <div className="max-w-5xl mx-auto px-6">
                <div className="mb-16 text-center">
                    {/* <p className="text-emerald-500 font-mono text-sm tracking-[0.3em] uppercase mb-2">Tech Stack</p> */}
                    <h2 className="text-3xl font-black text-white uppercase  ">Tecnologias & Ferramentas</h2>
                </div>

                {/* Container Único para todos os ícones */}
                <div className="flex flex-wrap justify-center gap-6">
                    {allSkills.map((skill) => (
                        <div
                            key={skill.name}
                            className="group relative flex items-center justify-center w-24 h-24 bg-slate-800/10 border border-slate-800/50 hover:border-emerald-500/50 hover:bg-emerald-500/5 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-500 rounded-2xl p-5"
                        >
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className={`w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-130 transition-all duration-500 
                                    ${skill.isDark ? 'brightness-0 invert' : ''}`}
                            />

                            <div className="absolute -top-12 scale-0 group-hover:scale-100 transition-all duration-300 bg-emerald-500 text-slate-900 text-sm font-black px-4 py-2 rounded-lg shadow-xl pointer-events-none whitespace-nowrap z-20">
                                {skill.name}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-emerald-500"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}