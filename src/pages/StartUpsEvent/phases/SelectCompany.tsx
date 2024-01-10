import Title from "@/components/Title";

import { motion } from "framer-motion";
import { ISelectCompanyProps, TCompany } from "../types";

import { Button } from "@/components/Form";
import Card from "@/components/Card";
import VideoCard from "@/components/VideoCard";

import { useEffect, useRef, useState } from "react";

import Greetings from "../assets/videos/Bem vindo.mp4";
import FIXIT from "../assets/videos/Fix it.mp4";
import VENX from "../assets/videos/VENX.mp4";
import BEMOVE from "../assets/videos/BE MOVE.mp4";
import Concieve from "../assets/videos/Concieve Sistemas.mp4";
import Donas from "../assets/videos/Donas do plantão.mp4";
import ESIG from "../assets/videos/ESIG.mp4";
import EVIS from "../assets/videos/Evis Saúde.mp4";
import MEDIC from "../assets/videos/MEDIC.mp4";
import Careforce from "../assets/videos/My CareForce.mp4";
import WAYABA from "../assets/videos/WayABA.mp4";

const companiesMap: TCompany[] = [
  {
    name: "Fix-IT",
    video: FIXIT,
  },
  {
    name: "Donas do Plantão",
    video: Donas,
  },
  {
    name: "WayABA",
    video: WAYABA,
  },
  {
    name: "Evis Saúde",
    video: EVIS,
  },
  {
    name: "My Careforce",
    video: Careforce,
  },
  {
    name: "M3DIC",
    video: MEDIC,
  },
  {
    name: "VENX",
    video: VENX,
  },
  {
    name: "Concieve Sistemas",
    video: Concieve,
  },
  {
    name: "ESIG",
    video: ESIG,
  },
  {
    name: "BE MOVE",
    video: BEMOVE,
  },
];

const SelectCompany = ({ setUIPhase }: ISelectCompanyProps) => {
  const [company, setCompany] = useState<TCompany>({
    name: "Olá, qual empresa você faz parte?",
    video: Greetings,
  });

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const onButtonCompanyButtonClicked = (company: TCompany) => {
    setCompany(company);

    setTimeout(() => {
      setUIPhase("home");
    }, 8000);
  };

  useEffect(() => {
    videoRef.current?.play();
  }, [company.video]);

  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
      className="flex flex-col gap-10"
    >
      <div
        className="flex flex-col items-center gap-5"
       
      >
        <Card>
          <VideoCard src={company?.video} reference={videoRef} />
        </Card>

        <Title>{company?.name}</Title>
      </div>

      {company.video === Greetings && (
        <div className="text-white grid grid-cols-3 gap-5 place-items-center">
          {companiesMap.map((company) => (
            <motion.div
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                delay: 4,
              }}
            >
              <Button
                text={company.name}
                onClick={() => onButtonCompanyButtonClicked(company)}
              />
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default SelectCompany;
