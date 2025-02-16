import { ComponentType } from 'react'
import { Restaurant } from '../services/api/restaurant';

export interface AbstractListProps {
    restaurant: Restaurant[] | undefined;
    CardComponent: ComponentType<{ restaurant: Restaurant, StarsRating: ComponentType<{ raiting: number }> }>
}

