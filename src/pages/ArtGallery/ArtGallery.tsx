import './ArtGalllery.styles.scss'
import { useState, useEffect } from 'react';
import { lazy, Suspense } from 'react';
const ArtGalleryCard = lazy(() => import('./ArtGalleryCard'));

const ArtGallery = () => {
  const [art, setArt] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArt = async () => {
      const apiUrl = 'https://www.rijksmuseum.nl/api/en/collection?key=KZE75qXi&involvedMaker=Rembrandt+van+Rijn';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setArt(data?.artObjects);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArt();
  }, []);
  return (
    <>
      <div className='gallery_hero'>
        <h1>Rijksmuseum gallery</h1>
      </div>
      {loading ? (<h1>Loading...</h1>) : (
        <div className='gallery'>
          {art.map(val => (
            <Suspense fallback={<div className='art_gallery_card_empty'>Loading artwork...</div>}>
              <ArtGalleryCard artwork={val}/>
            </Suspense>
          ))}
        </div>
      )}
    </>
  )
}

export default ArtGallery