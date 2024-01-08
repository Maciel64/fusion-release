import { useState } from "react";

import Home from "./phases/Home";
import Band from "./phases/Band";

export type TUIPhases = "home" | "band";

export default () => {
  const [UIPhase, setUIPhase] = useState<TUIPhases>("home");
  const [gradient, setGradient] = useState("gradient");

  const UIPhases = {
    home: <Home setUIPhase={setUIPhase} />,
    band: <Band setUIPhase={setUIPhase} setGradient={setGradient} />,
    qrcode: undefined,
    success: undefined,
  };

  return (
    <>
      <div
        className={`h-[100vh] flex justify-center items-center flex-col gap-8 ${gradient}`}
      >
        {UIPhases[UIPhase]}
      </div>
    </>
  );
};
