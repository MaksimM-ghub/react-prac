import { ComponentType } from 'react';
import { Restaurant } from '../services/api/restaurant';

export interface StarsRatingProps {
    raiting: number;
    id: string
  }

export interface CardProp {
    restaurant: Restaurant,
    StarsRating: ComponentType<StarsRatingProps>
}