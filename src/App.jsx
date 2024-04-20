import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/Home/HomePage";

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
    </BrowserRouter>
  );
}

export default App;
