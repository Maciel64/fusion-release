import { useRef } from "react";

import Form, { Input } from "@/components/Form";
import Title from "@/components/Title";
import { Button } from "@/components/Form";

const CheckIn = () => {
  const data = useRef(null);

  const onButtonClick = () => {};

  return (
    <>
      <Title>Quem é você?</Title>
      <Form data={data}>
        <Input text="Código do seu ingresso" />
        <Button text="Confirmar" />
        <span className="text-white text-center">Ou</span>
        <Button text="Ler QR Code" onClick={onButtonClick} />
      </Form>
    </>
  );
};

export default CheckIn;
