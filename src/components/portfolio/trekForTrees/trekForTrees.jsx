import { Link } from 'react-router-dom';
import './trekForTrees.scss'
import logoDev1 from './trekForTrees-assets/LogoDev_1.png'
import logoDev2 from './trekForTrees-assets/LogoDev_2.png'
import logoDev3 from './trekForTrees-assets/LogoDev_3.png'
import postcard from './trekForTrees-assets/Postcard.png'
import takeaway from './trekForTrees-assets/Takeaway.png'
import trekFullMockups from './trekForTrees-assets/Trek_FullMockups.png'
import booklet from './trekForTrees-assets/Book_FullMockup.png'

const TrekForTrees = () => {
  return (
    <>
      <main className='trek-for-trees-main'>
        <p className='project-number'>03</p>
        <div className='project-heading-line' />
        <p className='project-title'>Trek For Trees</p>
        <div className='project-heading-line' />
        <p className='project-description project-description-font'>
          <em>UNLV Graphic Design & Media Thesis</em><br /><br />
          <strong>Brief: </strong>
          Find a problem, in this case deforestation, and create a solution for it. <br /><br />
          <strong>Solution: </strong>
          With a focus on branding and identity, create a non-profit organization that raises
          awareness for deforestation.
        </p>
        <p className='project-description-font'><strong>Logo Development</strong></p>
        <div className='image-container'>
          <img src={logoDev1} alt="logo development 1" />
          <img src={logoDev2} alt="logo development 2" />
          <img src={logoDev3} alt="logo development 3" />
        </div>
        <p className='project-description-font'><strong>Postcard & Takeaway</strong></p>
        <div className='image-container-row image-container'>
          <img src={postcard} alt="postcard" />
          <img src={takeaway} alt="takeaway" />
        </div>
        <p className='project-description project-description-font'>
          <strong>Left: </strong>
          Postcard that is mailed out inviting people to visit an immersive installation that
          shows the effects of deforestation. <br />
          <strong>Right: </strong>
          A takeaway piece that shares a similar concept with the installation, but in a much
          smaller scale.
        </p>
        <p className='project-description-font'><strong>App</strong></p>
        <div className='image-container'>
          <img src={trekFullMockups} alt="Trek full mockups" />
        </div>
        <p className='project-description project-description-font'>
          By using this app to track how many miles you’ve ran, hiked, or walked, you are helping
          plant trees in forests around the world. Trek for Trees works in partnership with other
          organizations to plant a tree for every 25 miles completed by an individual.
        </p>
        <p className='project-description-font'><strong>Booklet</strong></p>
        <div className='image-container'>
          <img src={booklet} alt="booklet" />
        </div>
      </main>
      <footer>
          <footer className='footer-links-container'>
            <span>
              <Link to='/portfolio/colliers'>
                <p className='footer-link'>{'<< 02. Colliers'}</p>
              </Link>
            </span>
            <span>
              <Link to='/portfolio/life-aquatic'>
                <p className='footer-link'>{'04. Life Aquatic >>'}</p>
              </Link>
            </span>
          </footer>
          <div className='footer-rectangle'/>
        </footer>
    </>
  )
}

export default TrekForTrees;
