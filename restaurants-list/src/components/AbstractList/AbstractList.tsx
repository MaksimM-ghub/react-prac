import {FC} from 'react';
import { AbstractListProps } from '../../types/AbstractList';
import { StarsRating } from '../StarsRaining/StarsRaining';


export const AbstractList: FC<AbstractListProps> = ({restaurant, CardComponent}) => {
    return (
        <ul className="">
            {restaurant.map((item) => (
                <li key={item.id}>
                    <CardComponent restaurant={item} StarsRating={StarsRating}/>
                </li>
            ))}
        </ul>
    )
}