export const AbstractList = ({playlists}) => {
  return (
    <ul className ="playlist__list">
      {playlists.songs.map((playlist) => (
        <li key={Date.now()}>
          {playlist}
        </li>
      ))}
    </ul>
  )
}