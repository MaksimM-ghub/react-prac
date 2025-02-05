import { ComponentType } from 'react'
import { Restaurant } from '../services/api/restaurant';

export interface AbstractListProps {
    restaurant: Restaurant[],
    CardCompopnent: ComponentType<{ restaurant: Restaurant }>
}
