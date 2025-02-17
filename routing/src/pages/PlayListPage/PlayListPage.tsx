import { Playlist } from "../../components/Playlist/Playlist";
import { FormField } from "../../components/FormField/FormField";
import { Input } from "../../components/Input/Input";
import { FilterProvider } from "../../context/ProviderFilter";
import { useURLParams } from "../../hooks/useURLParams";
import { useFilter } from "../../hooks/useFilter";
import { PLAYLISTS } from "../../data/playlists";

export const PlaylistPage = () => {
  const [filter] = useFilter(); 
  useURLParams(); 

  const filterPlaylists = PLAYLISTS.filter((playlist) => {
    const searchGenre = playlist.genre
      .toLowerCase()
      .includes(filter.genre.toLowerCase());
    const searchName = playlist.name
      .toLowerCase()
      .includes(filter.name.toLowerCase());
    return searchGenre && searchName;
  });

  return (
    <FilterProvider>
      <div>
        <h2>PlaylistPage</h2>
        <FormField label="Введите жанр">
          <Input placeholder="Введите жанр" name="genre" />
        </FormField>
        <FormField label="Введите название">
          <Input placeholder="Введите название" name="name" />
        </FormField>
        <Playlist filterPlaylists={filterPlaylists} />
      </div>
    </FilterProvider>
  );
};
