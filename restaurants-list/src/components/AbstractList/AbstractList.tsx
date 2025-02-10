import {FC} from 'react';
import { AbstractListProps } from '../../types/AbstractList';
import { StarsRating } from '../StarsRaining/StarsRaining';
import { useFilter } from '../../hooks/useFilter';
import './AbstractList.scss'


export const AbstractList: FC<AbstractListProps> = ({restaurant, CardComponent}) => {
    const {filter} = useFilter();
    console.log(filter)
    const filterRestaurants = restaurant.filter((restaurant) => (
        restaurant.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    ));
    return (
        <ul className="card__list">
            {filterRestaurants.map((item) => (
                <li key={item.id} className='card__item'>
                    <CardComponent restaurant={item} StarsRating={StarsRating}/>
                </li>
            ))}
        </ul>
    )
}