import { ChangeEvent } from "react";

import {
  IButtonProps,
  IFormProps,
  IInputProps,
} from "./types";

export default ({ children, data }: IFormProps) => {
  const onFormChanged = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    data.current = { ...data.current, [event.target.name]: event.target.value };
  };

  return (
    <form className="flex flex-col gap-8 w-[300px]" onChange={onFormChanged}>
      {children}
    </form>
  );
};


export const Input = ({ text }: IInputProps) => {
  return (
    <>
      <input className="h-[44px] bg-white bg-opacity-20 font-bold text-white rounded pl-6" type="text" placeholder={text} />
    </>
  );
};

export const Button = ({ text, onClick, style }: IButtonProps) => {
  return (
    <>
      <button
        className="py-2 font-bold h-[44px] w-[300px] rounded-full font-display bg-orange-600 text-white flex-grow"
        style={style}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};
