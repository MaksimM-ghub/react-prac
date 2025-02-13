import { Restaurant } from '../services/api/restaurant';

export interface GetRestaurants {
    status: 'pending' | 'error' | 'success',
    data: Restaurant[] | undefined,
    error: unknown
}
