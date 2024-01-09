import { useState } from "react";
import { TUIPhases } from "./types";

import Home from "./phases/Home";
import SelectCompany from "./phases/SelectCompany";

const StartUpsEvent = () => {
  const [UIPhase, setUIPhase] = useState<TUIPhases>("home");

  const UIPhases = {
    home: <Home setUIPhase={setUIPhase} />,
    selectCompany: <SelectCompany setUIPhase={setUIPhase} />,
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      {UIPhases[UIPhase]}
    </div>
  );
};

export default StartUpsEvent;
