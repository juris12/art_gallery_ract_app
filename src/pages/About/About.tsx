import './About.styles.scss'

const About = () => {
  return (
    <>
      <div className='about_hero'>
        <h1>About the page and its development</h1>
        <p>
        I developed a simple web application build using React, SASS and Typescript.

        </p>
        <p>I created additional gallery page with infinite scrolling functionality. 
          Scrolling functionality has small bug that on initial page loading fetches identical artworks 3 times.
        </p>
        <p>
        Project is structured with code maintainability in mind. Each page and component has its own folder with .tsx and .scss files. 
        Additionally, I have added types to responses. There also error messages in case of bad server response.
        </p>
      </div>
  </>
  )
}

export default About