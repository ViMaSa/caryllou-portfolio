import './resume.scss'
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <>
      <main id='resume'>
        <section className='resume-section'>
          <p className='section-heading'>Profile</p>
          <p className='section-description'>
            Junior graphic designer with two years of experience and an eye for detail.
            Proficient in Adobe Creative Suite, particularly Photoshop, InDesign, and Illustrator.
          </p>
        </section>
        <div className='rectangle'/>
        <section className='resume-section'>
          <p className='section-heading'>Education</p>
          <p className='section-description'>
            2014 — 2018 <br/><strong>University of Nevada Las Vegas</strong><br/> Bachelor of
            Science in Graphic Design & Media Minor in Art History
          </p>
        </section>
        <div className='rectangle'/>
        <section className='resume-section'>
          <p className='section-heading'>Experience</p>
          <div className='experience'>
            <p className='section-description'>
              May 2019 — July 2021 <br/><strong>Colliers International | Jr. Graphic Designer</strong>
            </p>
            <p className='section-description'>
              Coordinated with brokers and other designers to design brochures, e-blasts,
              and other assets.
            </p>
            <p className='section-description'>
              Improved turn around time for projects from 3–4 days to 2–3, and sometimes same day.
            </p>
            <p className='section-description'>
              Modernized old brochures and e-blasts according to new brand guidelines over a
              3-month period, while also handling multiple new projects.
            </p>
            <p className='section-description'>
              Provided necessary support for operations manager around the office outside of design.
            </p>
          </div>
          <div className='experience'>
            <p className='section-description'>
              August 2018 — December 2018 <br/><strong>UNLV Graphic Design & Media Thesis Exhibition
              Student/Graphic Designer</strong>
            </p>
            <p className='section-description'>
              Cooperated with the class Creative Director to create assets to promote the Fall 2018
              Graphic Design & Media senior capstone show.
            </p>
            <p className='section-description'>
              Collaborated with another designer to design capstone book from conception to print.
            </p>
            <p className='section-description'>
              Participated in the show by creating and presenting a design solution to a problem
              through branding and identity, along with multiple assets to promote said brand and
              identity.
            </p>
          </div>
        </section>
        <div className='rectangle'/>
      </main>
      <footer>
        <div className='footer-links-container'>
          <span>
            <Link to='/portfolio'><p className='footer-link'>portfolio</p></Link>
          </span>
          <span>
            <Link to='/about'><p className='footer-link'>about</p></Link>
          </span>
        </div>
        <div id='footer-rectangle'/>
      </footer>
    </>
  )
}

export default Resume;
