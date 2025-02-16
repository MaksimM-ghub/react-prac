import { AbstractList } from '../AbstractList/AbstractList'

export const PlaylistCard = () => {
  return (
    <div className ="playlist__card">
      <p className ="playlist__genre">
        {playlist.genre}
      </p>
      <p className ="playlist__name">
        {playlist.name}
      </p>
      <AbstractList playlists={playlist}/>
    </div>
  )
}