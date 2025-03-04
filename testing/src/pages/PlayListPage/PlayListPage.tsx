import { Playlist } from "../../components/Playlist/Playlist";
import { FormField } from "../../components/FormField/FormField";
import { Input } from "../../components/Input/Input";
import { useURLParams } from "../../hooks/useURLParams";
import { useFilter } from "../../hooks/useFilter";
import { PLAYLISTS } from "../../data/playlists";
import { TPlaylist } from "../../data/interfaces";
import "./PlaylistPage.css"

export const PlaylistPage = () => {
  const { filter } = useFilter(); 
  useURLParams(); 

  const filterPlaylists: TPlaylist[] = PLAYLISTS.filter((playlist) => {
    const searchGenre = playlist.genre
      .toLowerCase()
      .includes(filter.genre.toLowerCase());
    const searchName = playlist.name
      .toLowerCase()
      .includes(filter.name.toLowerCase());
    return searchGenre && searchName;
  });

  return (
      <div className="playlist__wrapper">
        <h2>PlaylistPage</h2>
        <FormField label="Введите жанр">
          <Input placeholder="Введите жанр" name="genre" />
        </FormField>
        <FormField label="Введите название">
          <Input placeholder="Введите название" name="name" />
        </FormField>
        <Playlist filterPlaylists={filterPlaylists} />
      </div>
  );
};
