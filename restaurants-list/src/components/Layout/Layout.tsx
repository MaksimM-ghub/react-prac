import { useGetRestaurants } from "../../hooks/postFetch"
import { AbstractList } from "../AbstractList/AbstractList";
import { Card } from "../Card/Card";


export const Layout = () => {
    const {status, data, error} = useGetRestaurants();

    switch (status) {
        case "pending":
            return (
                <p>Загрузка</p>
            );
        case "error":
            return (
                <p>произошла ошибка: {(error as Error).message}</p>
            )    
        case "success":
            return (
                <AbstractList restaurant={data} CardComponent={Card}/>
            )
    }
}