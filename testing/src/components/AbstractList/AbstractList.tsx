import { FC } from 'react';
import { AbstractListProps } from '../../types/playlistType';
import { v4 as uuidv4 } from 'uuid';

export const AbstractList: FC<AbstractListProps> = ({playlists}) => {
  return (
    <ul className="playlist__list">
      {playlists.map((playlist) => (
        <li key={uuidv4()} data-testid="song-item" className ="playlist__item">
          {playlist}
        </li>
      ))}
    </ul>
  )
}
