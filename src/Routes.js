import { Routes, Route } from "react-router-dom";
import { Countdown } from "./components/Countdown";
import { FinalCountdown } from "./components/FinalCountdown";

export function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Countdown />} />
        <Route path="/finalcountdown" element={<FinalCountdown />} />
      </Route>
    </Routes>
  );
}