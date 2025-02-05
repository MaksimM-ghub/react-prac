import {FC} from 'react';
import { AbstractListProps } from '../../types/AbstractList';

export const AbstractList: FC<AbstractListProps> = ({restaurant, CardCompopnent}) => {
    return (
        <ul className="">
            {restaurant.map((item) => (
                <li key={item.id}>
                    <CardCompopnent restaurant={item}/>
                </li>
            ))}
        </ul>
    )
}