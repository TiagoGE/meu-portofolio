import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur border-b border-slate-800 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Esquerda: Nome + LinkedIn */}
                <div className="flex items-center gap-10">
                    <Link to="/" className="text-lg font-bold text-slate-100 hover:text-blue-400 transition duration-300">
                        Home
                    </Link>

                    <a
                        href="https://www.linkedin.com/in/tiago-guerra-endsfeldz-3a992720a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 text-2xl transition hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="/cv.pdf" className="px-3 py-1 text-xs rounded-full border border-slate-600 
                        text-slate-300 hover:text-blue-400 hover:border-blue-400 transition"
                        download="TiagoGuerra_CV">
                        Baixar CV
                    </a>
                </div>

                {/* Direita: Admin */}
                <Link
                    to="/login"
                    className="text-slate-300 hover:text-white border border-slate-600 px-4 py-1 rounded-md hover:border-blue-400 transition"
                >
                    Admin
                </Link>

            </div>
        </nav>
    );
}
