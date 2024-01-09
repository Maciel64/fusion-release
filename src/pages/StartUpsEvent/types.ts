export interface ISelectCompanyProps {
  setUIPhase: React.Dispatch<React.SetStateAction<TUIPhases>>;
}

export type TCompany = {
  name: string
};

export type TUIPhases = "home" | "selectCompany";
