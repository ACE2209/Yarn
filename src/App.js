import { Routes, Route } from "react-router-dom";
import Home from "./chuyen_trang/Home";
import Love from "./chuyen_trang/Love";
import Tran from "./chuyen_trang/Ngoc_Tran";
import Vy from "./chuyen_trang/Tuyet_Vy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/love" element={<Love />} />
      <Route path="/Vy" element={<Vy />} />
      <Route path="/Tran" element={<Tran />} />
    </Routes>
  );
}

export default App;
