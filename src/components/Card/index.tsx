import { ICardProps, ICardTitleProps } from "./types"


export default ({ children }: ICardProps) => {
  return (
    <>
      <div className="bg-red-50 rounded-md bg-opacity-30 backdrop-blur-sm p-4">
        {children}
      </div>
    </>
  );
};

export const CardTitle = ({ children }: ICardTitleProps) => {
  return (
    <>
      <h1 className="text-white text-lg">{children}</h1>
    </>
  );
};
