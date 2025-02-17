import { FC } from 'react';
import { AbstractList } from '../AbstractList/AbstractList'
import { playlistCard } from '../../types/playlistInfoPageType'

export const PlaylistCard: FC<playlistCard> = ({playlist}) => {

  if(!playlist) {
    return (
      <div className="playlist__card">
        <p className="playlist">
          Плейлиста с данным ID не существует
        </p>
      </div>
    )
  }

  return (
    <div className="playlist__card">
      <h2 className="playlist__title">Информация о плейлисте</h2>
      <p className="playlist__genre">
        {playlist.genre}
      </p>
      <p className="playlist__name">
        {playlist.name}
      </p>
      <AbstractList playlists={playlist.songs}/>
    </div>
  )
}