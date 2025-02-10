import { useMutation } from "@tanstack/react-query";
import { updateRestaurantRating } from "../api";
import { queryClient } from "../services/api/queryClient";

export function useUpdateRaiting () {
    const raitingMutation = useMutation({
        mutationFn: updateRestaurantRating,
        onSuccess() {
            queryClient.invalidateQueries({queryKey: ["restaurant"]})
        }
    }, queryClient)

    return raitingMutation
}