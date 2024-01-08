import { Button } from "@/components/Form";

import bannerMobile from "@/assets/img/bannerMobile.jpeg";

const Home = ({ setUIPhase }: any) => {
  const onButtonClicked = () => {
    setUIPhase("band");
  };

  return (
    <>
      <img
        src={bannerMobile}
        alt="Banner Que saúde o futuro nos reserva?"
        className="h-[80vh] justify-self-start"
      />

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

export default Home;
