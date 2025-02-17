import { FC } from 'react';
import { useFilter } from '../../hooks/useFilter';
import { InputProps } from '../../types/inputProps';
import { ChangeEvent } from 'react';

export const Input: FC<InputProps> = ({placeholder, name}) => {

  const {filter, setFilter} = useFilter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(prevFilter => ({
      ...prevFilter,
      [name]: event.target.value
    }));
  }

  return (
    <input 
      onChange={handleChange}
      className="playlist__filter-input"
      type="text"
      value={filter[name]}
      placeholder={placeholder}
    />
  )
}