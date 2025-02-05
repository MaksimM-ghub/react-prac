import {FC} from 'react';
import { CardProp } from '../../types/Card';
import { StarsRaining } from '../StarsRaining/StarsRaining';

export const Card: FC<CardProp> = ({restaurant, StarsRaining}) => {
    return (
        <div className='card'>
            <img src={restaurant.url} alt={restaurant.name} />
            <h2 className='card__name'>{restaurant.name}</h2>
            <p className='card__desc'>{restaurant.description}</p>
            <div className='card__raiting'>
                <StarsRaining/>
            </div>
        </div>
    )
}