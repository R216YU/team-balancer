import "./App.css";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Main from "./Layout/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HowToUse from "./components/HowToUse";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<HowToUse />} />
        <Route path={"/VALORANT"} element={<Main game="VALORANT" />} />
        <Route path={"/OVERWATCH"} element={<Main game="OVERWATCH" />} />
        <Route path={"/CSGO"} element={<Main game="CSGO" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
