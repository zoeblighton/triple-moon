import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Coaching from "./Coaching";
import Contact from "./Contact";
import SabbatWorkshops from "./SabbatWorkshops";
import EnchantedHen from "./EnchantedHen";
import Resources from "./Resources";
import EnergyCrystalSupport from "./EnergyCrystalSupport";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coaching" element={<Coaching />} />
      <Route path="/SabbatWorkshops" element={<SabbatWorkshops />} />
      <Route path="/EnchantedHen" element={<EnchantedHen />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/EnergyCrystalSupport" element={<EnergyCrystalSupport />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
