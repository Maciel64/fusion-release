import Title from "@/components/Title";

import { motion } from "framer-motion";
import { ISelectCompanyProps, TCompany } from "../types";

import { Button } from "@/components/Form";
import Card from "@/components/Card";
import VideoCard from "@/components/VideoCard";

import video from "@/assets/video/amarela_.mp4";

const SelectCompany = ({ setUIPhase }: ISelectCompanyProps) => {
  const companiesMap: TCompany[] = [
    {
      name: "Mock company 1",
    },
    {
      name: "Mock company 2",
    },
    {
      name: "Mock company 3",
    },
    {
      name: "Mock company 4",
    },
    {
      name: "Mock company 5",
    },
    {
      name: "Mock company 6",
    },
    {
      name: "Mock company 7",
    },
    {
      name: "Mock company 8",
    },
    {
      name: "Mock company 9",
    },
    {
      name: "Mock company 10",
    },
    {
      name: "Mock company 11",
    },
    {
      name: "Mock company 12",
    },
    {
      name: "Mock company 7",
    },
    {
      name: "Mock company 7",
    },
  ];

  return (
    <motion.div
      initial={{
        x: -100,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{ stiffness: 100, ease: "easeInOut", duration: 1 }}
      className="flex flex-col gap-10"
    >
      <div className="flex flex-col items-center gap-5">
        <Card>
          <VideoCard src={video} />
        </Card>

        <Title>Olá, qual empresa você faz parte?</Title>
      </div>

      <div className="text-white grid grid-cols-3 gap-5 place-items-center">
        {companiesMap.map(({ name }) => (
          <motion.div
            initial={{
              y: 200,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 5,
            }}
          >
            <Button text={name} onClick={() => setUIPhase('home')} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SelectCompany;
