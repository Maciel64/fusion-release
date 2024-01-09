import { Button } from "@/components/Form";
import { TUIPhases } from "../types";

interface IHomeProps {
  setUIPhase: React.Dispatch<React.SetStateAction<TUIPhases>>;
}

const Home = ({ setUIPhase }: IHomeProps) => {
  const onButtonClicked = () => {
    setUIPhase("selectCompany");
  };

  return (
    <div>
      <Button
        text="Iniciar Check-In"
        style={{ backgroundColor: "#FFFFFF", color: "#051F2B" }}
        onClick={onButtonClicked}
      />
    </div>
  );
};

export default Home;
