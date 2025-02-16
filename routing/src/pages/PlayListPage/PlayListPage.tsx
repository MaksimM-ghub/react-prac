import { Playlist } from '../../components/Playlist/Playlist';
import { FormField } from '../../components/FormField/FormField';
import { Input } from '../../components/Input/Input';
import { FilterProvider } from '../../context/ProviderFilter';

export const PlaylistPage = () => {
  
  return (
    <FilterProvider>
      <div>
        <h2>PlaylistPage</h2>
        <FormField label={"Введите жанр"}>
          <Input placeholder={"Введите жанр"}/>
        </FormField>
        <FormField label={"Введите название"}>
          <Input placeholder={"Введите название"}/>
        </FormField>
        <Playlist />
      </div>
    </FilterProvider>
  )
}