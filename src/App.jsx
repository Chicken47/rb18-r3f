import { useRef } from "react";
import CanvasContainer from "./CanvasContainer";
import Drivers from "./Drivers";
import Hero from "./Hero";
import Newey from "./Newey";

function App() {
  let driverSectionRef = useRef();
  return (
    <main className="overflow-x-hidden bg-slate-950">
      <div className="fixed z-50 w-full h-screen">
        <CanvasContainer driverRef={driverSectionRef} />
      </div>
      <Hero />
      <Drivers />
      <Newey />
    </main>
  );
}

export default App;
