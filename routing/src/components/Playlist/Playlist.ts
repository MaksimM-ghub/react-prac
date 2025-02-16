import { PLAYLISTS } from "../../data/playlists";
import { Link } from "react-router-dom";

export const Playlist = () => {
  return (
    <ul className="playlist__list">
      {PLAYLISTS.filter((playlist) => playlist.name) // Фильтруем только плейлисты с непустыми именами
        .map((playlist) => (
          <li key={playlist.id} className="playlist__item">
            <Link to={`/playlist/${playlist.id}`} className="playlist__link">
              {playlist.name}
            </Link>
          </li>
        ))}
    </ul>
  )
};
