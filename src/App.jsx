import NavBar from "./components/NavBar/NavBar";
import FirstLoad from "./components/firstload";
import '@fortawesome/fontawesome-free/css/all.min.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// import Quran from "./components/Quran/Quran";
import Taqrir from "./components/taqrir/Taqrir";
import Footer from "./components/footer/footer";
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
          {/* <Route path="/quran" element={<Quran />} /> */}
          <Route path="/taqrir" element={<Taqrir />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}
