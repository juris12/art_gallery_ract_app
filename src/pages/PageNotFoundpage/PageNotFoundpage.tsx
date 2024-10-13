import './PageNotFoundpage.styles.scss'
import { useNavigate } from 'react-router-dom'

const PageNotFoundpage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="page_not_found">
      <h1>404</h1>
      <p>Page not found</p>
      <button onClick={handleBack}>Go back</button>
    </div>
  )
}

export default PageNotFoundpage