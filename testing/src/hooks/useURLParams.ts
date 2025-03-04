import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFilter } from '../hooks/useFilter';

export function useURLParams() {
 const [searchParams, setSearchParams] = useSearchParams();
  const {filter, setFilter} = useFilter();

  const genreParamsURL = searchParams.get('genre') || "";
  const nameParamsURL = searchParams.get('name') || "";

  useEffect(() => {
    setFilter({genre: genreParamsURL, name: nameParamsURL})
  }, [genreParamsURL, nameParamsURL, setFilter]);

  useEffect(() => {
    const params: Record<string, string> = {};
    if(filter.genre) params.genre = filter.genre;
    if(filter.name) params.name = filter.name;
    setSearchParams(params);
  }, [filter, setSearchParams]);
}