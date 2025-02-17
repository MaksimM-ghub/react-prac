import { FC } from 'react';
import { AbstractListProps } from '../../types/playlistInfoPageType';

export const AbstractList: FC<AbstractListProps> = ({playlists}) => {
  return (
    <ul className ="playlist__list">
      {playlists.map((playlist: string) => (
        <li key={Date.now()} className ="playlist__item">
          {playlist}
        </li>
      ))}
    </ul>
  )
}