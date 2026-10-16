import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Coaching from "./Coaching";
import SabbatWorkshops from "./SabbatWorkshops";
import EnchantedHen from "./EnchantedHen";
import Resources from "./Resources";
import EnergyCrystalSupport from "./EnergyCrystalSupport";
import TheJoyOfCrystals from "./TheJoyOfCrystals";
import GalleryPage from "./GalleryPage";
import AMagicalHome from "./AMagicalHome";
import LovingMagically from "./LovingMagically";
import NotFound from "./NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coaching" element={<Coaching />} />
      <Route path="/SabbatWorkshops" element={<SabbatWorkshops />} />
      <Route path="/EnchantedHen" element={<EnchantedHen />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/EnergyCrystalSupport" element={<EnergyCrystalSupport />} />
      <Route path="/TheJoyOfCrystals" element={<TheJoyOfCrystals />} />
      <Route path="/GalleryPage" element={<GalleryPage />} />
      <Route path="/AMagicalHome" element={<AMagicalHome />} />
      <Route path="/LovingMagically" element={<LovingMagically />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
