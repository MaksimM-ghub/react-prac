import { useContext } from "react";
import { FilterContext } from "../context/ProviderFilter";

export const useFilter = () => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("Контекст отсутствует");
  }

  return context;
};
