import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { GlobalStyle, Layout, Main } from "./AppStyles.js";
const Characters = React.lazy(() => import("mf_characters/Characters"));
const CharacterDetail = React.lazy(() =>
  import("mf_character_detail/CharacterDetail")
);

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Layout>
        <Navbar />
        <Main>
          <Suspense fallback={<div>Cargando...</div>}>
            <Routes>
              <Route path="/" element={<Characters />} />
              <Route path="/character/:id" element={<CharacterDetail />} />
            </Routes>
          </Suspense>
        </Main>
        <Footer />
      </Layout>
    </Router>
  );
}
