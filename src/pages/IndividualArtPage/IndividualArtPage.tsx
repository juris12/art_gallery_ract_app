import './IndividualArtPage.styles.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { ArtDetails } from '../../components';
import ArtObject  from '../../components/ArtDetails/ArtDetailsType';

interface ApiResponse {
  artObject: ArtObject;
}
const IndividualArtPage = () => {
  const { id } = useParams()
  const [art, setArt] = useState<ArtObject | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [errorMesage, setErrorMesage] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArt = async () => {
      const apiUrl = `https://www.rijksmuseum.nl/api/en/collection/${id}?key=KZE75qXi`;
      try {
        const res = await fetch(apiUrl);
        const data: ApiResponse = await res.json();
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        if (data.artObject){
          setArt(data.artObject);
        } else {
          setErrorMesage('No artworks found.');
        }
    
      } catch (error) {
        setErrorMesage(`Error fetching data, ${error}`)
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArt();
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className='indivdual_art_outer'>
      {errorMesage && (<div className='error_mesage'>{errorMesage}</div>)}
      {loading && (<h1>Loading....</h1>)}
      { !loading && (
        <>
        <button onClick={handleBack} className="back_to_gallery"><FaArrowLeft /></button>
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