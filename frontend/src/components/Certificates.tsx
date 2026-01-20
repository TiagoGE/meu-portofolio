import { useEffect, useState } from "react";
import { api } from "../services/api";

interface Certificate {
    _id: string;
    title: string;
    organization: string;
    date: string;
    imgLink: string;
}

export function Certificates() {
    const [certificates, setCertificates] = useState<Certificate[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get("/certificates")
            .then(res => {
                console.log("datas que chegaram:", res.data)
                setCertificates(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center py-10 text-slate-400">Carregando certificados...</div>;
    }

    return (
        <section id="certificates" className="bg-[#0B1120] py-20">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-white">Certificados & Conquistas</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map(cert => (
                        <div
                            key={cert._id}
                            className="group bg-slate-900 rounded-xl border border-slate-700 overflow-hidden hover:border-blue-500 transition-all duration-300 shadow-lg"
                        >
                            {/* CONTAINER DA IMAGEM */}
                            <div className="relative h-48 overflow-hidden bg-slate-800">
                                <img
                                    src={cert.imgLink}
                                    alt={cert.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Overlay sutil ao passar o mouse */}
                                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            {/* CONTEÚDO */}
                            <div className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                                        {cert.organization}
                                    </span>
                                    <span className="text-[10px] text-slate-500 font-medium">
                                        {cert.date}
                                    </span>
                                </div>

                                <h3 className="text-lg font-semibold text-slate-100 leading-snug">
                                    {cert.title}
                                </h3>

                                <a
                                    href={cert.imgLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-block mt-4 text-xs font-semibold text-slate-400 hover:text-white transition-colors uppercase tracking-tighter"
                                >
                                    Ver certificado original ↗
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}