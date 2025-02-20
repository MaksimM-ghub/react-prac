import { PlaylistCard } from "../../components/PlaylistCard/PlaylistCard"
import { PLAYLISTS } from '../../data/playlists';
import { useParams } from 'react-router-dom';

export const PlaylistInfoPage = () => {

  const {id} = useParams();

  const playlist = PLAYLISTS[Number(id)];

  return (
    <div className ="playlist__info-page">
      <PlaylistCard playlist={playlist} />
    </div>
  )
}