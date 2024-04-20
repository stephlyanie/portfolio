import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/Home/HomePage";
import Footer from "./components/Footer/Footer";

import './App.scss';

function App() {
  return (
    <BrowserRouter>
     <section>
        <Header />
        <Routes>
          {/* ROOT ROUTE */}
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </section>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
