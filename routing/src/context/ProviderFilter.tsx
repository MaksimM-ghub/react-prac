import { FC, createContext, useState, useEffect } from 'react';
import { filterProvider, filterInput, filterState } from '../types/contextType';
import { useLocation } from 'react-router-dom';

export const FilterContext = createContext<filterInput | undefined>(undefined);

export const FilterProvider: FC<filterProvider> = ({children}) => {
  const [filter, setFilter] = useState<filterState>({genre: "", name:""});
  const location = useLocation();

  useEffect(() => {
    setFilter({ genre: '', name: '' });
  }, [location.pathname]);  


  return (
    <FilterContext.Provider value={{filter, setFilter}}>
      {children}
    </FilterContext.Provider>
  )
}
