import { Link } from "react-router-dom";
import digitalJournalCover from './portfolioPage-assets/DigitalJournal.png'
import colliersCover from './portfolioPage-assets/Colliers.png'
import lifeAquaticCover from './portfolioPage-assets/LifeAquatic.png'
import trekForTreesCover from './portfolioPage-assets/Trek.png'

const PortfolioPage = () => {
  return (
    <>
      <main id="portfolio-page-main">
        <Link to='digital-journal'>
          <section className="project-section slideRight">
            <div className="project-section-heading">
              <p className="project-number">01</p>
              <div className="project-heading-line" />
            </div>
            <p className="project-title">Digital Journal</p>
            <img src={digitalJournalCover} alt="Digital Journal Cover" />
          </section>
        </Link>
        <Link to='colliers'>
          <section className="project-section slideLeft">
            <div className="project-section-heading">
              <p className="project-number">02</p>
              <div className="project-heading-line" />
            </div>
            <p className="project-title">Colliers</p>
            <img src={colliersCover} alt="Colliers Cover" />
          </section>
        </Link>
        <Link to='trek-for-trees'>
          <section className="project-section slideRight">
            <div className="project-section-heading">
              <p className="project-number">03</p>
              <div className="project-heading-line" />
            </div>
            <p className="project-title">Trek for Trees</p>
            <img src={trekForTreesCover} alt="Trek for Trees Cover" />
          </section>
        </Link>
        <Link to='life-aquatic'>
          <section className="project-section slideLeft">
            <div className="project-section-heading">
              <p className="project-number">04</p>
              <div className="project-heading-line" />
            </div>
            <p className="project-title">Life Aquatic</p>
            <img src={lifeAquaticCover} alt="Life Aquatic Cover" />
          </section>
        </Link>
      </main>
      <footer className='footer-links-container'>
        <span>
          <Link to='/about'><p className='footer-link'>about</p></Link>
        </span>
        <span>
          <Link to='/resume'><p className='footer-link'>resume</p></Link>
        </span>
      </footer>
      <div className='footer-rectangle'/>
    </>
  )
}

export default PortfolioPage;
