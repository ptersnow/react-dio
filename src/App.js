import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Cadastro } from "./pages/Cadastro";
import { Feed } from "./pages/Feed";

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <BrowserRouter>
     <GlobalStyle />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/feed" element={<Feed />} />
     </Routes >
    </BrowserRouter>
  );
}

export default App;
