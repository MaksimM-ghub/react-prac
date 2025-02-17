import { FC, createContext, useState } from 'react';
import { filterProvider, filterInput, filterState } from '../types/contextType';

export const FilterContext = createContext<filterInput | undefined>(undefined);

export const FilterProvider: FC<filterProvider> = ({children}) => {
  const [filter, setFilter] = useState<filterState>({genre: "", name:""});  


  return (
    <FilterContext.Provider value={{filter, setFilter}}>
      {children}
    </FilterContext.Provider>
  )
}
