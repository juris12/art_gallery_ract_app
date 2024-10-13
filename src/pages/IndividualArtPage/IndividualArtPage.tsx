import './IndividualArtPage.styles.scss'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { ArtDetails } from '../../components';
import ArtObject  from '../../components/ArtDetails/ArtDetailsType';


const IndividualArtPage = () => {
  const { id } = useParams()
  const [art, setArt] = useState<ArtObject | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [errorMesage, setErrorMesage] = useState<string | undefined>(undefined);


  useEffect(() => {
    const fetchArt = async () => {
      const apiUrl = `https://www.rijksmuseum.nl/api/en/collection/${id}?key=KZE75qXi`;
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        if (!data.artObject){
          setErrorMesage("Error fetching data wrong id")
        }
        setArt(data.artObject);
      } catch (error) {
        setErrorMesage(`Error fetching data, ${error}`)
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArt();
  }, [id]);

  return (
    <div className='indivdual_art_outer'>
      {errorMesage && (<div className='error_mesage'>{errorMesage}</div>)}
      {loading && (<h1>Loading....</h1>)}
      { !loading && (
        <>
        <Link  className="back_to_gallery" to='/gallery'><FaArrowLeft /></Link>
        <div className='iner_img_section'>
          <img src={art?.webImage?.url} alt={art?.label?.title} />
        </div>
        <div className='iner_text_section'>
          <h1>{art?.label?.title ?? "No info"}</h1>
          <h4>{art?.label?.makerLine ?? "No info"}</h4>
          <p>{art?.label?.description ?? "No info"}</p>
          <a href="#details">More details...</a>
        </div>
        <ArtDetails artObject={art}/>
      </>
      )}
  </div>
  )
}

export default IndividualArtPage