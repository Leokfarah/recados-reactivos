import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cadastro } from "../pages/cadastro/Cadastro";
import { Home } from "../pages/home/Home";
import { Login } from "../pages/login/Login";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<h1>Não Encontrado</h1>} />
            </Routes>
        </BrowserRouter>
    );
}
