import { FC } from 'react';
import { useFilter } from '../../hooks/useFilter';
import { InputProps } from '../../types/inputProps';
import { ChangeEvent } from 'react';

export const Input: FC<InputProps> = ({placeholder}) => {

  const {filter, setFilter} = useFilter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  }

  return (
    <input 
      onChange={handleChange}
      className="playlist__filter-input"
      type="text"
      value={filter}
      placeholder={placeholder}
    />
  )
}