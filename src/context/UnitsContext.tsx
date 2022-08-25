import { createContext, ReactNode, useContext, useState } from "react";

interface IUnitsContenxtData {
  units: "metric" | "imperial";
  setUnits: (units: "metric" | "imperial") => void;
}

interface IUnitsProviderProps {
  children: ReactNode;
}

const UnitsContext = createContext({} as IUnitsContenxtData);

export const useUnitsContext = () => {
  return useContext(UnitsContext);
};

export const UnitsProvider: React.FC<IUnitsProviderProps> = ({ children }) => {
  const [units, setUnits] = useState<"metric" | "imperial">("metric");

  return (
    <UnitsContext.Provider value={{ units, setUnits }}>
      {children}
    </UnitsContext.Provider>
  );
};
