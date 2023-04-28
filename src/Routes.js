import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./pages/Inicio"
import SobreMim from "./pages/SobreMim"
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "pages/Post";
import NaoEncontrada from "pages/NaoEncontrada";

export default function AppRoutes() {
  return (
    <BrowserRouter>

      <Menu/>
        {/*  
            Na Rota "/", a estrutura a ser renderiza  é:
              <PaginaPadrao>
                  <Inicio/>
              </PaginaPadrao>

            Na Rota "/sobremim", a estrutura a ser renderiza  é:
              <PaginaPadrao>
                  <SobreMim/>
              </PaginaPadrao>
        */}
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}> 
            <Route path="/index" element={<Inicio/>}/>
            <Route path="/" element={<SobreMim/>}/>
        </Route>
        <Route path="posts/:id" element={<Post/>}/>
        <Route path="*" element={<NaoEncontrada/>}/>
      </Routes>
      <Rodape/>
    </BrowserRouter>
  );
}
