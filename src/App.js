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
      <Route path="/sabbatworkshops" element={<SabbatWorkshops />} />
      <Route path="/enchantedhen" element={<EnchantedHen />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/energycrystalsupport" element={<EnergyCrystalSupport />} />
      <Route path="/thejoyofcrystals" element={<TheJoyOfCrystals />} />
      <Route path="/gallerypage" element={<GalleryPage />} />
      <Route path="/amagicalhome" element={<AMagicalHome />} />
      <Route path="/lovingmagically" element={<LovingMagically />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
