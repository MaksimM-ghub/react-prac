import { ComponentType } from 'react';
import { Restaurant } from '../services/api/restaurant';

export interface CardProp {
    restaurant: Restaurant,
    StarsRating: ComponentType<{ raiting: number }>
}

export interface StarsRatingProps {
    raiting: number;
  }