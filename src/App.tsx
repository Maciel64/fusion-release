import { useNavigate } from "react-router-dom";
import { Button } from "./components/Form";

const App = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 grid grid-cols-3 gap-5 place-items-center">
      <Button
        text="Fusion Experience"
        onClick={() => navigate("/fusionExperience")}
      />
      <Button
        text="Evento StartUps"
        onClick={() => navigate("/startUpEvent")}
      />
    </div>
  );
};

export default App;
