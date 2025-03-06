import { FC } from 'react';
import { AbstractListProps } from '../../types/playlistType';
import { v4 as uuidv4 } from 'uuid';

export const AbstractList: FC<AbstractListProps> = ({playlists}) => {
  return (
    <ul className="playlist__list">
      {playlists.map((playlist) => (
        <li key={uuidv4()} className ="playlist__item" data-testid="song-item">
          {playlist}
        </li>
      ))}
    </ul>
  )
}