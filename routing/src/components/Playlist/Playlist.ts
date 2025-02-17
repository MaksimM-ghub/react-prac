import React, { FC } from "react";
import { Link } from "react-router-dom";
import { TPlaylist } from "../../data/interfaces";
import { PlaylistProp } from "../../types/playlistInfoPageType";

export const Playlist: FC<PlaylistProp> = ({ filterPlaylists }) => {
  return (
    <ul className="playlist__list">
      {filterPlaylists
        .filter((playlist) => playlist.name)
        .map((playlist: TPlaylist) => (
          <li key={playlist.id} className="playlist__item">
            <Link to={`/playlist/${playlist.id}`} className="playlist__link">
              {playlist.name}
            </Link>
          </li>
        ))}
    </ul>
  );
};
