import { Link } from 'react-router-dom';
import './digitalJournal.scss'
import digitalJournalCover from './digitalJournal-assets/cover.png'
import digitalJournalS1 from './digitalJournal-assets/Spread1.png'
import digitalJournalS2 from './digitalJournal-assets/Spread2.png'
import digitalJournalS3 from './digitalJournal-assets/Spread3.png'
import digitalJournalS4 from './digitalJournal-assets/Spread4.png'
import digitalJournalS5 from './digitalJournal-assets/Spread5.png'
import digitalJournalS6 from './digitalJournal-assets/Spread6.png'
import digitalJournalS7 from './digitalJournal-assets/Spread7.png'

const DigitalJournal = () => {
  return (
    <>
      <main className='digital-journal-main'>
        <p className="project-number">01</p>
        <div className="project-heading-line" />
        <p className="project-title">Digital Journal</p>
        <div className="project-heading-line" />
        <p className='project-description project-description-font'>
          This is a passion project that documents 2021.
          <br /><br />
          My goal was to design as much as possible in my free time and to explore design
          without any constraints you would normally face when working on a project for a client.
          <br /><br />
          Photos used were taken with a point and shoot camera, as I also wanted to learn more
          about shooting with and developing film. Featured here a several spreads with varying
          layouts.
        </p>
        <section className='digital-journal-images-container'>
          <img src={digitalJournalCover} alt="Digital Journal Cover" className='digital-journal-image'/>
          <img src={digitalJournalS1} alt="Digital Journal Spread 1" className='digital-journal-image'/>
          <img src={digitalJournalS2} alt="Digital Journal Spread 2" className='digital-journal-image'/>
          <img src={digitalJournalS3} alt="Digital Journal Spread 3" className='digital-journal-image'/>
          <img src={digitalJournalS4} alt="Digital Journal Spread 4" className='digital-journal-image'/>
          <img src={digitalJournalS5} alt="Digital Journal Spread 5" className='digital-journal-image'/>
          <img src={digitalJournalS6} alt="Digital Journal Spread 6" className='digital-journal-image'/>
          <img src={digitalJournalS7} alt="Digital Journal Spread 7" className='digital-journal-image'/>
        </section>
      </main>
      <footer>
        <footer className='footer-links-container'>
          <span>
            <Link to='/portfolio'><p className='footer-link'>{'<< Portfolio'}</p></Link>
          </span>
          <span>
            <Link to='/portfolio/colliers'><p className='footer-link'>{'2.Colliers >>'}</p></Link>
          </span>
        </footer>
        <div className='footer-rectangle'/>
      </footer>
    </>
  )
}

export default DigitalJournal;
