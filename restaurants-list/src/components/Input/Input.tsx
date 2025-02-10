import { FC, ChangeEvent } from "react";
import { useFilter } from "../../hooks/useFilter"
import "./input.css"

export const Input: FC = () => {
    const {filter, setFilter} = useFilter();

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value)
    }
    return <input 
    className="filter-input" 
    placeholder="Search for restaurants"
    value={filter}
    onChange={handleInput}
    />
}