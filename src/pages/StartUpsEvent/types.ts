export interface ISelectCompanyProps {
  setUIPhase: React.Dispatch<React.SetStateAction<TUIPhases>>;
}

export type TCompany = {
  name: string,
  video: string
};

export type TUIPhases = "home" | "selectCompany";
