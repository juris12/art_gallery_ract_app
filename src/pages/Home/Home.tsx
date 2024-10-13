import './Home.styles.scss'
import { useState, useEffect } from 'react';
import { Carousel } from '../../components'
import { artworkType } from '../../types'

interface ApiResponse {
  artObjects: artworkType[];
}

const Home = () => {
  const [art, setArt] = useState<artworkType[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [errorMesage, setErrorMessage] = useState<string | undefined>(undefined);


  const newSuffle = () => {
    setPage(Math.floor(Math.random() * 25 ) + 1)
  }

  useEffect(()=>{
    const fetchArt = async () => {
      const apiUrl = `https://www.rijksmuseum.nl/api/en/collection?key=KZE75qXi&p=${page}&ps=25`;
      try {
        setLoading(true);
        const res = await fetch(apiUrl);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data: ApiResponse = await res.json();
        if (data.artObjects) {
          setArt(data.artObjects);
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
    fetchArt()
  },[page])

  return (
    <div className='home_shuffle' id="shuffle">
      <h1>Rijksmuseum shuffle</h1>
      {errorMesage && (<div className='error_mesage'>{errorMesage}</div>)}
      <div className='carussel'>
        {loading ? <div>Loading...</div> :<Carousel art={art}/>}
      </div>
      <button onClick={newSuffle} className='super_button'>shuffle</button>
  </div>
  )
}

export default Home