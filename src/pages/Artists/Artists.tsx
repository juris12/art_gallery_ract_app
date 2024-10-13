import './Artists.styles.scss'
import ArtistsCard from './ArtistsCard'

const Artists = () => {
  return (
    <>
      <div className='artist_hero'>
        <h1>Rijksmuseum artists</h1>
      </div>
        <div className='artist_gallery'>
            {[0,1,2,3,4,5,6].map(val => (<ArtistsCard artwork={val}/>))}
      </div>
  </>
  )
}

export default Artists