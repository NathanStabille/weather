import { createContext, ReactNode, useContext, useState } from "react";

interface IUnitsContenxtData {
  units: "c" | "f";
  setUnits: (units: "c" | "f") => void;
}

interface IUnitsProviderProps {
  children: ReactNode;
}

const UnitsContext = createContext({} as IUnitsContenxtData);

export const useUnitsContext = () => {
  return useContext(UnitsContext);
};

export const UnitsProvider: React.FC<IUnitsProviderProps> = ({ children }) => {
  const [units, setUnits] = useState<"c" | "f">("c");

  return (
    <UnitsContext.Provider value={{ units, setUnits }}>
      {children}
    </UnitsContext.Provider>
  );
};
