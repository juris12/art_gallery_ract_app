import './Home.styles.scss'
import { Carousel } from '../../components'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <section>
      <div className='home_hero'>
        <h1>Rijksmuseum shuffle</h1>
        <p>Explore our varyous artists and their work</p>
        <NavLink to="/#shuffle">Go to shuffle art Carousel...</NavLink>
      </div>
        <div className='home_shuffle' id="shuffle">
          <div className='carussel'>
            <Carousel/>
          </div>
          <button className='super_button'>shuffle</button>
      </div>
    </section>
  )
}

export default Home