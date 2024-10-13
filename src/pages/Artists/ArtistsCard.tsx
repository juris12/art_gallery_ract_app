import { Link } from 'react-router-dom'

type artworkType = {
    artwork: number
}
const ArtistsCard = ({artwork}: artworkType) => {
  return (
    <Link to='/' key={artwork} className='artist_card'>
        <p>{artwork}_tete</p>
    </Link>
  )
}

export default ArtistsCard