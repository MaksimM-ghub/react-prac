import { FC } from 'react';
import { AbstractList } from '../AbstractList/AbstractList'
import { playlistCard } from '../../types/playlistType'
import { useFilter } from '../../hooks/useFilter';
import { useNavigate } from 'react-router-dom';

export const PlaylistCard: FC<playlistCard> = ({playlist}) => {

  const navigate = useNavigate();
  const { setFilter } = useFilter();

  if(!playlist) {
    return (
      <div className="playlist__card">
        <p className="playlist">
          Плейлиста с данным ID не существует
        </p>
      </div>
    )
  }

  const handleClickGenre = () => {
    setFilter((prevFilter) => ({ ...prevFilter, genre: playlist.genre }));
    navigate(`/playlist?genre=${playlist.genre}`);
  };

  return (
    <div className="playlist__card">
      <h2 className="playlist__title">Информация о плейлисте</h2>
      <p onClick={handleClickGenre} className="playlist__genre"> 
        Жанр: {playlist.genre}
      </p>
      <p className="playlist__name">
        Название: {playlist.name}
      </p>
      <AbstractList playlists={playlist.songs}/>
    </div>
  )
}