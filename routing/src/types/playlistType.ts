import { TPlaylist } from "../data/interfaces";
import { IPlaylistFull } from "../data/interfaces";

export interface AbstractListProps {
  playlists: string[];
}

export interface playlistCard {
  playlist: IPlaylistFull;
}

export interface PlaylistProp {
  filterPlaylists: TPlaylist[]
}
