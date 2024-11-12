import { Routes, Route } from "react-router-dom";
import { Countdown } from "./components/Countdown";
import { Index } from "./Pages/main";

export function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Countdown />} />
        <Route path="/index" element={<Index />} />
      </Route>
    </Routes>
  );
}