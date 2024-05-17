import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/Home/HomePage";
import SingleProjectPage from "./pages/Projects/SingleProjectPage";
import Footer from "./components/Footer/Footer";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <section className="site-container">
        <Header />
        <Routes>
          {/* ROOT ROUTE */}
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/:projectPageId" element={<SingleProjectPage />}></Route>
        </Routes>
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
