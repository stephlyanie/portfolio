import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";

import './App.scss';

function App() {
  return (
    <BrowserRouter>
     <main>
          <Routes>
            {/* ROOT ROUTE */}
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
