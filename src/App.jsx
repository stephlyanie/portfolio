import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/Home/HomePage";
import ProjectsListPage from "./pages/Projects/ProjectsListPage";
import SingleProjectPage from "./pages/Projects/SingleProjectPage";
import Footer from "./components/Footer/Footer";

import "./App.scss";

function App() {  
  const initialFilter = "";

  return (
    <BrowserRouter>
      <section className="site-container">
        <Header />
        <Routes>
          {/* ROOT ROUTE */}
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/projects" element={<ProjectsListPage />}></Route>
          <Route path="/projects/:projectPageId" element={<SingleProjectPage />}></Route>
        </Routes>
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
