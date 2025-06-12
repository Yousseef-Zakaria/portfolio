import "@fontsource/sora"; // Defaults to 400
import './index.css'; 
import Header from "./components/Header/Header";
import { Hero } from "./components/Hero-Section/Hero";
import Services from "./components/Services-Section/Services";
export default function App() {
  return (
    <div className="bg-[#0F0715]">
      <Header />
      <Hero/>
      <Services />
    </div>
  )
}