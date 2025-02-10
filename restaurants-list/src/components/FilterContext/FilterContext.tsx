import { FC, createContext, useState} from "react";
import { filterContext, filterInput } from "../../types/filterContext";


export const FilterInput = createContext<filterInput | undefined>(undefined)

export const FilterContext: FC<filterContext> = ({children}) => {
    const [filter, setFilter] = useState<string>("");

    return (
        <FilterInput.Provider value={{filter, setFilter}}>
            {children}
        </FilterInput.Provider>
    ) 
}