import { FC, useState } from "react";
import { StarsRatingProps } from "../../types/Card";

export const StarsRating: FC<StarsRatingProps> = ({raiting}) => {
  const [raitingStart, setraitingStart] = useState<number>(raiting);
  const [hoveredRating, setHoveredRating] = useState<number>(0);

  const starsLength = Array.from({ length: 5 }, (_, i) => i + 1); // Создаем массив [1, 2, 3, 4, 5]

  const handleHoverStars = (starsNumber: number) => {
    setHoveredRating(starsNumber);
  };

  const handleClickStar = (starsNumber: number) => {
    setraitingStart(starsNumber);
  };

  return (
    <div className="card__stars">
      {starsLength.map((starsNumber) => {
        const isHighlighted = starsNumber <= (hoveredRating || raitingStart);

        return (
          <span
            key={starsNumber}
            onClick={() => handleClickStar(starsNumber)}
            onMouseEnter={() => handleHoverStars(starsNumber)}
            onMouseLeave={() => setHoveredRating(0)}
            style={{ cursor: "pointer" }}
          >
            <svg
              fill={isHighlighted ? 'gold' : 'transparent'}
              height="24px"
              width="24px"
              viewBox="0 0 49.94 49.94"
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
            >
              <path d="M48.856,22.731c0.983-0.958,1.33-2.364,0.906-3.671c-0.425-1.307-1.532-2.24-2.892-2.438l-12.092-1.757 c-0.515-0.075-0.96-0.398-1.19-0.865L28.182,3.043c-0.607-1.231-1.839-1.996-3.212-1.996c-1.372,0-2.604,0.765-3.211,1.996 L16.352,14c-0.23,0.467-0.676,0.79-1.191,0.865L3.069,16.623C1.71,16.82,0.603,17.753,0.178,19.06 c-0.424,1.307-0.077,2.713,0.906,3.671l8.749,8.528c0.373,0.364,0.544,0.888,0.456,1.4L8.224,44.702 c-0.232,1.353,0.313,2.694,1.424,3.502c1.11,0.809,2.555,0.914,3.772,0.273l10.814-5.686c0.461-0.242,1.011-0.242,1.472,0 l10.815,5.686c0.528,0.278,1.1,0.415,1.669,0.415c0.739,0,1.475-0.231,2.103-0.688c1.111-0.808,1.656-2.149,1.424-3.502 L39.651,32.66c-0.088-0.513,0.083-1.036,0.456-1.4L48.856,22.731z M37.681,32.998l2.065,12.042c0.104,0.606-0.131,1.185-0.629,1.547 c-0.499,0.361-1.12,0.405-1.665,0.121l-10.815-5.687c-0.521-0.273-1.095-0.411-1.667-0.411s-1.145,0.138-1.667,0.412l-10.813,5.686 c-0.547,0.284-1.168,0.24-1.666-0.121c-0.498-0.362-0.732-0.94-0.629-1.547l2.065-12.042c0.199-1.162-0.186-2.348-1.03-3.17 L2.48,21.299c-0.441-0.43-0.591-1.036-0.4-1.621c0.19-0.586,0.667-0.988,1.276-1.077l12.091-1.757 c1.167-0.169,2.176-0.901,2.697-1.959l5.407-10.957c0.272-0.552,0.803-0.881,1.418-0.881c0.616,0,1.146,0.329,1.419,0.881 l5.407,10.957c0.521,1.058,1.529,1.79,2.696,1.959l12.092,1.757c0.609,0.089,1.086,0.491,1.276,1.077 c0.19,0.585,0.041,1.191-0.4,1.621l-8.749,8.528C37.866,30.65,37.481,31.835,37.681,32.998z" />
            </svg>
          </span>
        );
      })}
    </div>
  );
};
// const [hoveredRating, setHoveredRating] = useState<number>(0); // Хранение временного рейтинга при наведении

// return (
//   <div style={{ display: 'flex', cursor: 'pointer' }}>
//     {starsLength.map((_, index) => {
//       const starIndex = index + 1; // Звезды нумеруются от 1
//       const isHighlighted = starIndex <= (hoveredRating || rating); // Звезды закрашиваются при наведении или если выбраны

//       return (
//         <span
//           key={starIndex}
//           onClick={() => setRating(starIndex)} // Установить рейтинг при клике
//           onMouseEnter={() => setHoveredRating(starIndex)} // Показать временный рейтинг при наведении
//           onMouseLeave={() => setHoveredRating(0)} // Сбрасывать отображение при убирании курсора
//           style={{ marginRight: '8px' }}
//         >
//           <img
//             src={star}
//             alt="star"
//             style={{
//               width: '24px',
//               height: '24px',
//               filter: isHighlighted ? 'brightness(1.4) sepia(1) hue-rotate(-50deg) saturate(5)' : 'brightness(0.7)',
//               transition: 'filter 0.2s', // Для плавного изменения закраски
//             }}
//           />
//         </span>
//       );
//     })}
//   </div>
// );
