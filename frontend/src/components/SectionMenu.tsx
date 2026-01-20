interface SectionMenuProps {
    active: string;
    setActive: (section: string) => void;
}

export function SectionMenu({ active, setActive }: SectionMenuProps) {
    const items = [
        { id: "about", label: "Sobre mim" },
        { id: "skills", label: "Skills & Tecnologias" },
        { id: "projects", label: "Projetos" },
        { id: "certificates", label: "Certificados" },
    ];

    return (
        <div className="flex justify-center gap-6 mt-10 flex-wrap">
            {items.map((item) => (
                <button
                    key={item.id}
                    onClick={() => setActive(item.id)}
                    className={`
            px-5 py-2 rounded-full border transition
            ${active === item.id
                            ? "border-blue-400 text-blue-400 bg-blue-400/10"
                            : "border-slate-600 text-slate-300 hover:border-blue-400 hover:text-blue-400"
                        }
          `}
                >
                    {item.label}
                </button>
            ))}
        </div>
    );
}
