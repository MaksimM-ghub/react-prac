import { FC, createContext, useState } from 'react';
import { filterProvider, filterInput } from '../types/contextType';

export const FilterContext = createContext<filterInput | undefined>(undefined);

export const FilterProvider: FC<filterProvider> = ({children}) => {
  const [filter, setFilter] = useState<string>("");  

  return (
    <FilterContext.Provider value={{filter, setFilter}}>
      {children}
    </FilterContext.Provider>
  )
}