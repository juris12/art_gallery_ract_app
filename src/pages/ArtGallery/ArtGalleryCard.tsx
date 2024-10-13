import { Link } from 'react-router-dom'

type artworkType = {
    artwork: {
      title: string,
      objectNumber: string,
      webImage:{
        url:string
      }
    }
}
const ArtGalleryCard = ({artwork}: artworkType) => {
  return (
    <Link to={`/gallery/${artwork?.objectNumber}`} key={artwork?.objectNumber} className='art_gallery_card'>
        <img src={`${artwork?.webImage?.url}`} alt={artwork?.title}  loading="lazy"/>
        <p>
        { artwork?.title.length > 25? (`${artwork?.title.slice(0,25)}...`) : (artwork?.title)}
        </p>
    </Link>
  )
}

export default ArtGalleryCard