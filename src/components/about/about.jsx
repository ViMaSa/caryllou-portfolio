import './about.scss';
import candidPhoto from './about-assets/about.png';
import emailIcon from './about-assets/Icon feather-mail.svg';
import instagramIcon from './about-assets/Icon awesome-instagram.svg';
import linkedInIcon from './about-assets/Icon awesome-linkedin.svg';
import behanceIcon from './about-assets/Icon awesome-behance-square.svg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <main>
        <div id='candid-container'>
          <img src={candidPhoto} alt="Caryl Lou Paayas" />
        </div>
        <section>
          <p id='about-heading'>hey, hi, hello!</p>
          <p id='about-description'>
            My name is Caryl Lou and I am a graphic designer. I love all things design, but have
            a strong interest in editorial and publication design. Currently, I am learning about
            UX/UI design. I am always eager for opportunities to learn more about design and to
            become a better designer. <br /><br />
            When I am not designing, I like to watch movies, learn more about film photography,
            read, try a new recipe, play video games or take a road trip
            somewhere. <br /><br />
            Based in Las Vegas, NV.
          </p>
        </section>
        <div className='rectangle'></div>
      </main>
      <footer>
        <p>Find me here:</p>
        <div className='socials-container'>
          <a href="https://mail.google.com/" target='_blank' rel='noreferrer'><img src={emailIcon} alt="E-mail icon" /></a>
          <a href="https://www.instagram.com/" target='_blank' rel='noreferrer'><img src={instagramIcon} alt="Instagram icon" /></a>
          <a href="https://www.linkedin.com/" target='_blank' rel='noreferrer'><img src={linkedInIcon} alt="LinkedIn icon" /></a>
          <a href="https://www.behance.net/" target='_blank' rel='noreferrer'><img src={behanceIcon} alt="Behance icon" /></a>
        </div>
        <div className='footer-links-container'>
          <span>
            <Link to='/portfolio'><p className='footer-link'>portfolio</p></Link>
          </span>
          <span>
            <Link to='/resume'><p className='footer-link'>resume</p></Link>
          </span>
        </div>
        <div className='footer-rectangle'/>
      </footer>
    </>
  )
}

export default About;
