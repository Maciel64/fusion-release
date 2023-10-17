import { useState } from "react";
import { Button } from "../components/Form";

import bannerDesktop from "../assets/img/banner.png";
import bannerMobile from "../assets/img/bannerMobile.jpeg";


export default ({ setUIPhase }: any) => {
  const [width, setWidth] = useState(window.innerWidth)
  const onButtonClicked = () => {
    setUIPhase("band");
  };

  return (
    <>
      {width > 512 ? (
        <img
          src={bannerDesktop}
          alt="Banner Que saúde o futuro nos reserva?"
          className="h-[50vh] justify-self-start"
        />
      ) : (
        <img
          src={bannerMobile}
          alt="Banner Que saúde o futuro nos reserva?"
          className="h-[80vh] justify-self-start"
        />
      )}

      <div className="flex w-[300px]">
        <Button
          text="Iniciar Check-In"
          style={{ backgroundColor: "#FFFFFF", color: "#051F2B" }}
          onClick={onButtonClicked}
        />
      </div>
    </>
  );
};
