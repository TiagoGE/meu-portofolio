import { useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        setError(""); // limpa erro anterior

        try {
            const res = await api.post("/auth/login", { email, password });
            localStorage.setItem("token", res.data.token);
            navigate("/admin");
        } catch (err: any) {
            if (err.response && err.response.data) {
                setError(err.response.data.message);
            } else {
                setError("Erro ao conectar com o servidor");
            }
        }
    }

    return (
        <div className="min-h-screen flex justify-start pt-24 px-6">
            <div className="max-w-md w-full mx-auto">

                {/* Texto explicativo */}
                <div className="mb-6 text-center">
                    <h2 className="text-2xl font-bold mb-2">Área Administrativa</h2>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        O login de administrador permite adicionar, editar e remover projetos, 
                        certificações e experiências exibidas no portfólio. 
                        Esta área é destinada apenas a mim, proprietário do site. :)
                    </p>
                </div>

                {/* Formulário */}
                <form
                    onSubmit={handleLogin}
                    className="bg-slate-800 p-8 rounded-xl border border-slate-700"
                >
                    <input
                        type="email"
                        required
                        className="w-full p-2 mb-3 bg-slate-900 rounded outline-none"
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        className="w-full p-2 mb-4 bg-slate-900 rounded outline-none"
                        placeholder="Senha"
                        onChange={e => setPassword(e.target.value)}
                    />

                    {/* Mensagem de erro */}
                    {error && (
                        <p className="text-red-400 text-sm mb-3 text-center">
                            {error}
                        </p>
                    )}

                    <button className="bg-blue-500 w-full py-2 rounded font-medium hover:bg-blue-600 transition">
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}
