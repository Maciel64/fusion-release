import { Button } from "@/components/Form";
import { TUIPhases } from "../types";

import { motion } from "framer-motion";

interface IHomeProps {
  setUIPhase: React.Dispatch<React.SetStateAction<TUIPhases>>;
}

const Home = ({ setUIPhase }: IHomeProps) => {
  const onButtonClicked = () => {
    setUIPhase("selectCompany");
  };

  return (
    <motion.div
    initial={{
      scale:0
    }}
    animate={{
      scale:1,
    }}
    >
      <Button
        text="Iniciar Check-In"
        style={{ backgroundColor: "#FFFFFF", color: "#051F2B" }}
        onClick={onButtonClicked}
      />
    </motion.div>
  );
};

export default Home;
