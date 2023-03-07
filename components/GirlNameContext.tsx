import { createContext } from "react";

type GirlNameContextType = {
  girlName: string;
  setGirlName: React.Dispatch<React.SetStateAction<string>>;
};

export const GirlNameContext = createContext<GirlNameContextType>({
  girlName: "",
  setGirlName: () => {},
});
