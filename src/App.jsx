import NavBar from "./components/NavBar/NavBar";
import FirstLoad from "./components/firstload";
import Quran from "./components/Quran/Quran";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<FirstLoad />} />
          <Route path="/quran" element={<Quran />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
