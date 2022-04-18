import './App.css';
import { Hero } from "./components/Hero";
import { Kecece } from "./components/Kecece";
import { CloudSection } from "./components/CloudSection";
import { PoussinBack } from "./components/PoussinBack";
import {PoussinDoor} from "./components/PoussinDoor";
import {CarouselSection} from "./components/CarouselSection";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Kecece />
      <CloudSection />
      <PoussinBack />
      <PoussinDoor />
      <CarouselSection />
      <Footer />
    </div>
  );
}

export default App;
