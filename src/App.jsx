import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Adversite from "./Page/Adversite";
import Supports from "./Page/Supports";
import About from "./Page/About";
import HomeContainer from "./Page/HomeContainer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/adversite" element={<Adversite />} />
        <Route path="/supports" element={<Supports />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
