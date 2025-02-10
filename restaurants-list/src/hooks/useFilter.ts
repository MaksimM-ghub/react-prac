import { useContext } from "react";
import { FilterInput } from "../components/FilterContext/FilterContext";

export const useFilter = () => {
  const context = useContext(FilterInput);

  if (!context) {
    throw new Error("Контекст отсутствует");
  }

  return context;
};
