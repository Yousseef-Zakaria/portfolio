import "@fontsource/sora"; // Defaults to 400
import './index.css'; // This must exist
import Header from "./components/Header/Header";
import { Hero } from "./components/Hero-Section/Hero";
export default function App() {
  return (
    <div className="bg-[#0F0715]">
      <Header />
      <Hero/>
    </div>
  )
}