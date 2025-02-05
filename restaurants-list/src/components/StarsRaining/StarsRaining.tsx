import star from '../../assets/star.svg';
import { useState } from 'react';

export const StarsRating: React.FC = () => {
    const starsLength = [...Array(5).keys()]; // Массив из 5 элементов
    const [rating, setRating] = useState<number>(0); // Хранение текущего рейтинга
    const [hoveredRating, setHoveredRating] = useState<number>(0); // Хранение временного рейтинга при наведении
  
    return (
      <div style={{ display: 'flex', cursor: 'pointer' }}>
        {starsLength.map((_, index) => {
          const starIndex = index + 1; // Звезды нумеруются от 1
          const isHighlighted = starIndex <= (hoveredRating || rating); // Звезды закрашиваются при наведении или если выбраны
  
          return (
            <span
              key={starIndex}
              onClick={() => setRating(starIndex)} // Установить рейтинг при клике
              onMouseEnter={() => setHoveredRating(starIndex)} // Показать временный рейтинг при наведении
              onMouseLeave={() => setHoveredRating(0)} // Сбрасывать отображение при убирании курсора
              style={{ marginRight: '8px' }}
            >
              <img
                src={star}
                alt="star"
                style={{
                  width: '24px',
                  height: '24px',
                  filter: isHighlighted ? 'brightness(1.4) sepia(1) hue-rotate(-50deg) saturate(5)' : 'brightness(0.7)',
                  transition: 'filter 0.2s', // Для плавного изменения закраски
                }}
              />
            </span>
          );
        })}
      </div>
    );
  };