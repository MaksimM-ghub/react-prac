import { FC } from "react";
import { CardProp } from "../../types/Card";
import './card.scss';

export const Card: FC<CardProp> = ({ restaurant, StarsRating }) => {
    return (
      <div className="card">
        <img src={restaurant.url} alt={restaurant.name} className="card__img"/>
        <h2 className="card__name">{restaurant.name}</h2>
        <p className="card__desc">{restaurant.description}</p>
        <StarsRating raiting={restaurant.raiting} id={restaurant.id} />
      </div>
    );
  };
  
