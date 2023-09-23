import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NotFound from "paginas/NotFound";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        {/* 
          na rota "/", a estrutura a ser renderizada é:

          <PaginaPadrao>
            <Inicio />
          </PaginaPadrao>

          na rota "/sobremim", a estrutura a ser renderizada é:

          <PaginaPadrao>
            <SobreMim />
          </PaginaPadrao>
        */}
        <Route path="post/:id/*" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}