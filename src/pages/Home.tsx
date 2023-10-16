import banner from "../assets/img/banner.png";
import { Button } from "../components/Form";



export default ({ setUIPhase }: any) => {
  const onButtonClicked = () => {
    setUIPhase("band");
  };

  return (
    <>
      <img
        src={banner}
        alt="Banner Que saúde o futuro nos reserva?"
        className="h-[50vh] justify-self-start"
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
