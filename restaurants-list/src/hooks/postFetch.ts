import { useQuery } from "@tanstack/react-query";
import { getRestaurants } from "../api";
import {queryClient} from '../services/api/queryClient'
import { GetRestaurants } from "../types/getRestaurants";


export function useGetRestaurants(): GetRestaurants {
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