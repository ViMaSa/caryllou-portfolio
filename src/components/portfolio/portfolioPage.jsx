import { Link } from "react-router-dom";
import {
  portfolioPageColliers,
  portfolioPageDigitalJournal,
  portfolioPageLifeAquatic,
  portfolioPageTrek,
  portfolioPageColliers_2x,
  portfolioPageDigitalJournal_2x,
  portfolioPageLifeAquatic_2x,
  portfolioPageTrek_2x,
} from '../../assets/images';

const PortfolioPage = () => {
  return (
    <>
      <main id="portfolio-page-main">
        <Link to='digital-journal'>
          <section className="project-section slide-right">
            <div className="project-section-heading">
              <p className="project-number">01</p>
              <div className="project-heading-line" />
            </div>
            <p className="project-title">Digital Journal</p>
            <img
              alt='Digital Journal Cover'
              src={portfolioPageDigitalJournal}
              srcSet={`
                ${portfolioPageDigitalJournal} 173w,
                ${portfolioPageDigitalJournal_2x} 346w
              `}
              sizes='
                (max-width: 600px) 173px,
                346px
              '
            />
          </section>
        </Link>
        <Link to='colliers'>
          <section className="project-section slide-left">
            <div className="project-section-heading">
              <p className="project-number">02</p>
              <div className="project-heading-line" />
            </div>
            <p className="project-title">Colliers</p>
            <img
              alt='Colliers Cover'
              src={portfolioPageColliers}
              srcSet={`
                ${portfolioPageColliers} 173w,
                ${portfolioPageColliers_2x} 346w
              `}
              sizes='
                (max-width: 600px) 173px,
                346px
              '
            />
          </section>
        </Link>
        <Link to='trek-for-trees'>
          <section className="project-section slide-right">
            <div className="project-section-heading">
              <p className="project-number">03</p>
              <div className="project-heading-line" />
            </div>
            <p className="project-title">Trek for Trees</p>
            <img
              alt='Trek for Trees Cover'
              src={portfolioPageTrek}
              srcSet={`
                ${portfolioPageTrek} 173w,
                ${portfolioPageTrek_2x} 346w
              `}
              sizes='
                (max-width: 600px) 173px,
                346px
              '
            />
          </section>
        </Link>
        <Link to='life-aquatic'>
          <section className="project-section slide-left">
            <div className="project-section-heading">
              <p className="project-number">04</p>
              <div className="project-heading-line" />
            </div>
            <p className="project-title">Life Aquatic</p>
            <img
              alt='Life Aquatic Cover'
              src={portfolioPageLifeAquatic}
              srcSet={`
                ${portfolioPageLifeAquatic} 173w,
                ${portfolioPageLifeAquatic_2x} 346w
              `}
              sizes='
                (max-width: 600px) 173px,
                346px
              '
            />
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
