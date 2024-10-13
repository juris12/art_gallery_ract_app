import './ArtGalllery.styles.scss'
import { useState, useEffect, useRef } from 'react';
import { lazy, Suspense } from 'react';
const ArtGalleryCard = lazy(() => import('./ArtGalleryCard'));
import { artworkType } from '../../types'

interface ApiResponse {
  artObjects: artworkType[];
}

const ArtGallery = () => {
  const [art, setArt] = useState<artworkType[]>([]);
  const [loading, setLoading] = useState(true);
  const footerRef = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState(1);
  const [errorMesage, setErrorMessage] = useState<string | undefined>(undefined);

  const fetchArt = async () => {
    const apiUrl = `https://www.rijksmuseum.nl/api/en/collection?key=KZE75qXi&p=${page}&ps=25`;
    try {
      setLoading(true);
      const res = await fetch(apiUrl);
      const data: ApiResponse = await res.json();

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
    
      if (data?.artObjects){
        setArt(prevArt => [...prevArt, ...data.artObjects]);
      } else {
        setErrorMessage('No artworks found.');
      }
    } catch (error) {
      setErrorMessage(`Error fetching data: ${error instanceof Error ? error.message : error}`);
      console.log('Error fetching data', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(33333)
    fetchArt();
    setPage(2);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage(prevPage => prevPage + 1);
          fetchArt();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, [loading]);

  return (
    <>
      <div className='gallery_hero'>
        <h1>Rijksmuseum gallery</h1>
        {errorMesage && (<div className='error_mesage'>{errorMesage}</div>)}
      </div>
      {art.length !=0  && (
        <div className='gallery'>
          {art.map(val => (
            <Suspense fallback={<div className='art_gallery_card_empty'>Loading artwork...</div>}>
              <ArtGalleryCard artwork={val}/>
            </Suspense>
          ))}
        </div>
      )}
      <div ref={footerRef} className="gallery_footer">
        {loading && <h1>Loading...</h1>}
      </div>
    </>
  )
}

export default ArtGallery