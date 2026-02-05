import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Coaching from "./Coaching";
import Contact from "./Contact"; // optional route page; see note below

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coaching" element={<Coaching />} />

      {/* OPTIONAL: only keep this if you want /contact as its own URL */}
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
