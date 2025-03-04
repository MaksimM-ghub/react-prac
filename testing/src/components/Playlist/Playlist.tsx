import { FC } from "react";
import { NavLink } from "react-router-dom";
import { PlaylistProp } from "../../types/playlistType";
import { IPlaylistFull } from "../../data/interfaces";
import './Playlist.css'


export const Playlist: FC<PlaylistProp> = ({ filterPlaylists }) => {
  return (
    <ul className="playlist__list list-reset">
      {filterPlaylists
        .filter((playlist) => playlist.name)
        .map((playlist: IPlaylistFull) => (
          <li key={playlist.id} className="playlist__item">
            <NavLink to={`/playlist/${playlist.id}`} className="playlist__link">
              {playlist.name}
            </NavLink>
          </li>
        ))}
    </ul>
  );
};
