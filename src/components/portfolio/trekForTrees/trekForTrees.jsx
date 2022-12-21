import { Link } from 'react-router-dom';
import {
  trekForTreesLogoDev1,
  trekForTreesLogoDev1_2x,
  trekForTreesLogoDev2,
  trekForTreesLogoDev2_2x,
  trekForTreesLogoDev3,
  trekForTreesLogoDev3_2x,
  trekForTreesPostCard,
  trekForTreesPostCard_2x,
  trekForTreesTakeaway,
  trekForTreesTakeaway_2x,
  trekForTreesTrekFullMockups,
  trekForTreesTrekFullMockups_2x,
  trekForTreesBooklet,
  trekForTreesBooklet_2x,
} from '../../../assets/images';

const TrekForTrees = () => {
  return (
    <>
      <main className='project-main'>
        <p className='project-number'>03</p>
        <div className='project-heading-line' />
        <p className='project-title'>Trek For Trees</p>
        <div className='project-heading-line' />
        <p className='project-margin project-description-font'>
          <em>UNLV Graphic Design & Media Thesis</em><br /><br />
          <strong>Brief: </strong>
          Find a problem, in this case deforestation, and create a solution for it. <br /><br />
          <strong>Solution: </strong>
          With a focus on branding and identity, create a non-profit organization that raises
          awareness for deforestation.
        </p>
        <p className='project-section-header'>Logo Development</p>
        <div className='image-container'>
          <img
            alt='Trek for Trees Logo development 1'
            src={trekForTreesLogoDev1}
            srcSet={`
              ${trekForTreesLogoDev1} 354w,
              ${trekForTreesLogoDev1_2x} 708w
            `}
            sizes='
              (max-width: 600px) 354px,
              708px
            '
          />
          <img
            alt='Trek for Trees Logo development 2'
            src={trekForTreesLogoDev2}
            srcSet={`
              ${trekForTreesLogoDev2} 354w,
              ${trekForTreesLogoDev2_2x} 708w
            `}
            sizes='
              (max-width: 600px) 354px,
              708px
            '
          />
          <img
            alt='Trek for Trees Logo development 3'
            src={trekForTreesLogoDev3}
            srcSet={`
              ${trekForTreesLogoDev3} 354w,
              ${trekForTreesLogoDev3_2x} 708w
            `}
            sizes='
              (max-width: 600px) 354px,
              708px
            '
          />
        </div>
        <p className='project-section-header'>Postcard & Takeaway</p>
        <section className='image-container'>
          <div className='image-container-row'>
            <img
              alt='Trek for Trees Postcard'
              src={trekForTreesPostCard}
              srcSet={`
                ${trekForTreesPostCard} 172w,
                ${trekForTreesPostCard_2x} 344w
              `}
              sizes='
                (max-width: 600px) 172px,
                344px
              '
            />
            <img
              alt='Trek for Trees Takeaway'
              src={trekForTreesTakeaway}
              srcSet={`
                ${trekForTreesTakeaway} 172w,
                ${trekForTreesTakeaway_2x} 344w
              `}
              sizes='
                (max-width: 600px) 172px,
                344px
              '
            />
          </div>
        </section>
        <p className='project-margin project-description-font'>
          <strong>Left: </strong>
          Postcard that is mailed out inviting people to visit an immersive installation that
          shows the effects of deforestation. <br />
          <strong>Right: </strong>
          A takeaway piece that shares a similar concept with the installation, but in a much
          smaller scale.
        </p>
        <p className='project-section-header'>App</p>
        <div className='image-container'>
          <img
            alt='Trek for Trees Full Mockups'
            src={trekForTreesTrekFullMockups}
            srcSet={`
              ${trekForTreesTrekFullMockups} 354w,
              ${trekForTreesTrekFullMockups_2x} 708w
            `}
            sizes='
              (max-width: 600px) 354px,
              708px
            '
          />
        </div>
        <p className='project-margin project-description-font'>
          By using this app to track how many miles you’ve ran, hiked, or walked, you are helping
          plant trees in forests around the world. Trek for Trees works in partnership with other
          organizations to plant a tree for every 25 miles completed by an individual.
        </p>
        <p className='project-section-header'>Booklet</p>
        <div className='image-container'>
          <img
            alt='Trek for Trees Booklet'
            src={trekForTreesBooklet}
            srcSet={`
              ${trekForTreesBooklet} 354w,
              ${trekForTreesBooklet_2x} 708w
            `}
            sizes='
              (max-width: 600px) 354px,
              708px
            '
          />
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
