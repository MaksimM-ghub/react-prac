import { PlaylistCard } from "../../components/PlaylistCard/PlaylistCard"
import { PLAYLISTS } from '../../data/playlists';
import { useParams } from 'react-router-dom';

export const PlaylistInfoPage = () => {

  const {id} = useParams();

  const playlist = PLAYLISTS[Number(id)];

  if (!playlist) {
		return (
			<div className="PlaylistInfoPage">
				<h2>PlaylistInfoPage</h2>

				<div className="users">
					<p>Плейлиста с таким id нет</p>
				</div>
			</div>
		);
	}

  return (
    <div className ="playlist__info-page">
      <PlaylistCard playlist={playlist} />
    </div>
  )
}