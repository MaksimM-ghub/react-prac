import { useQuery } from "@tanstack/react-query";
import { getRestaurants } from "../api";
import {queryClient} from '../services/api/queryClient'

export function useGetRestaurants() {
    const {status, data, error} = useQuery({
        queryFn: () => getRestaurants(),
        queryKey: ["restaurant"]
    }, queryClient)

    return {
        status,
        data,
        error
    }
}