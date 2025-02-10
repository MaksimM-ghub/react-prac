import { FC, useState } from "react";
import { StarsRatingProps } from "../../types/Card";
import { useUpdateRaiting } from "../../hooks/useUpdateRating";
import "./StarsRaining.scss";

export const StarsRating: FC<StarsRatingProps> = ({ raiting, id }) => {
  const [raitingStart, setraitingStart] = useState<number>(raiting);
  const [hoveredRating, setHoveredRating] = useState<number>(0);

  const raitingMutation = useUpdateRaiting();

  const starsLength = Array.from({ length: 5 }, (_, i) => i + 1); // Создаем массив [1, 2, 3, 4, 5]

  const handleHoverStars = (starsNumber: number) => {
    setHoveredRating(starsNumber);
  };

  const handleClickStar = (starsNumber: number) => {
    setraitingStart(starsNumber);
    raitingMutation.mutate({ id: id, raiting: starsNumber });
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
            className="card__star"
          >
            <svg
              height="24px"
              width="24px"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
            >
              <g>
                <path
                  style={{ transition: "fill 0.3s linear" }}
                  fill={isHighlighted ? "#394240" : "transparent"}
                  d="M31.998,2.478c0.279,0,0.463,0.509,0.463,0.509l8.806,18.759l20.729,3.167l-14.999,15.38l3.541,21.701
		l-18.54-10.254l-18.54,10.254l3.541-21.701L2,24.912l20.729-3.167l8.798-18.743C31.527,3.002,31.719,2.478,31.998,2.478 M31.998,0
		c-0.775,0-1.48,0.448-1.811,1.15l-8.815,18.778L1.698,22.935c-0.741,0.113-1.356,0.632-1.595,1.343
		c-0.238,0.71-0.059,1.494,0.465,2.031l14.294,14.657L11.484,61.67c-0.124,0.756,0.195,1.517,0.822,1.957
		c0.344,0.243,0.747,0.366,1.151,0.366c0.332,0,0.666-0.084,0.968-0.25l17.572-9.719l17.572,9.719
		c0.302,0.166,0.636,0.25,0.968,0.25c0.404,0,0.808-0.123,1.151-0.366c0.627-0.44,0.946-1.201,0.822-1.957l-3.378-20.704
		l14.294-14.657c0.523-0.537,0.703-1.321,0.465-2.031c-0.238-0.711-0.854-1.229-1.595-1.343l-19.674-3.006L33.809,1.15
		C33.479,0.448,32.773,0,31.998,0L31.998,0z"
                />
                <path
                  style={{ transition: "fill 0.3s linear" }}
                  fill={isHighlighted ? "#F9EBB2" : "transparent"}
                  d="M31.998,2.478c0.279,0,0.463,0.509,0.463,0.509l8.806,18.759l20.729,3.167l-14.999,15.38l3.541,21.701
		l-18.54-10.254l-18.54,10.254l3.541-21.701L2,24.912l20.729-3.167l8.798-18.743C31.527,3.002,31.719,2.478,31.998,2.478"
                />
              </g>
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
