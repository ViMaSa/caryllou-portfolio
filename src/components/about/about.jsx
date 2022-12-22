import "./about.scss";
import FooterLinks from "../footer/footer";
import {
  aboutCandid,
  aboutCandid_2x,
  emailIcon,
  instagramIcon,
  linkedInIcon,
  behanceIcon,
} from "../../assets/images";

const About = () => {
  return (
    <>
      <main>
        <div id="candid-container">
          <img
            alt="Caryl Lou Paayas"
            src={aboutCandid}
            srcSet={`
              ${aboutCandid} 428w,
              ${aboutCandid_2x} 856w
            `}
            sizes="
              (max-width: 600px) 428px,
              856px
            "
          />
        </div>
        <section>
          <p id="about-heading">hey, hi, hello!</p>
          <p id="about-description">
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
        <div className="rectangle"></div>
      </main>
      <footer>
        <p>Find me here:</p>
        <div className="socials-container">
          <a href="mailto: clpaayas@gmail.com"><img src={emailIcon} alt="E-mail icon" /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={instagramIcon} alt="Instagram icon" /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><img src={linkedInIcon} alt="LinkedIn icon" /></a>
          <a href="https://www.behance.net/" target="_blank" rel="noreferrer"><img src={behanceIcon} alt="Behance icon" /></a>
        </div>
        <FooterLinks
          leftLinkPath="/resume"
          leftLinkText="resume"
          rightLinkPath="/portfolio"
          rightLinkText="portfolio"
        />
      </footer>
    </>
  )
}

export default About;
