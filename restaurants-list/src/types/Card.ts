import { ComponentType } from 'react';
import { Restaurant } from '../services/api/restaurant';

export interface CardProp {
    restaurant: Restaurant,
    StarsRaining: ComponentType
}