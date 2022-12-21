import { Link } from 'react-router-dom';
import {
  colliersBrochures,
  colliersBrochures2x,
  colliersEBlast,
  colliersEBlast2x,
  colliersNarrative,
  colliersNarrative2x,
  colliersEBlast2,
  colliersEBlast2_2x,
  colliersGroup18,
  colliersGroup18_2x,
  colliersWillmoreHoliday,
  colliersWillmoreHoliday2x,
  colliersHappyNewYear2020,
  colliersHappyNewYear2020_2x,
  colliersOfficeHoliday2020,
  colliersOfficeHoliday2020_2x,
  colliersMonthlyPerkPosters,
  colliersMonthlyPerkPosters2x,
} from '../../../assets/images';

const Colliers = () => {
  return (
    <>
      <main className='project-main'>
        <p className='project-number'>02</p>
        <div className='project-heading-line' />
        <p className='project-title'>Colliers</p>
        <div className='project-heading-line' />
        <p className='project-margin project-description-font'>
          Colliers is a commercial real estate company. As a graphic designer for them, I worked
          with the design manager and brokers to create materials such as brochures, email
          campaigns, social assets, and posters.
        </p>
        <section className='image-container'>
          <img
            alt='Colliers brochures'
            src={colliersBrochures}
            srcSet={`
              ${colliersBrochures} 354w,
              ${colliersBrochures2x} 708w
            `}
            sizes='
              (max-width: 600px) 354px,
              708px
            '
          />
          <img
            alt='colliers e-blast'
            src={colliersEBlast}
            srcSet={`
              ${colliersEBlast} 354w,
              ${colliersEBlast2x} 708w
            `}
            sizes='
              (max-width: 600px) 354px,
              708px
            '
          />
        </section>
        <div>
          <p className='project-section-header'>Colliers Branded Projects</p>
          <p className='project-section-description'>
            Most marketing materials adhere to branding guidelines. However, the layout of a page
            varies depending on the content provided.
          </p>
        </div>
        <section className='image-container'>
          <div className='image-container-row'>
            <img
              alt='colliers narrative'
              src={colliersNarrative}
              srcSet={`
                ${colliersNarrative} 354w,
                ${colliersNarrative2x} 708w
              `}
              sizes='
                (max-width: 600px) 354px,
                708px
              '
            />
            <img
              alt='colliers e-blast2'
              src={colliersEBlast2}
              srcSet={`
                ${colliersEBlast2} 354w,
                ${colliersEBlast2_2x} 708w
              `}
              sizes='
                (max-width: 600px) 354px,
                708px
              '
            />
          </div>
          <img
            alt='colliers group 18'
            src={colliersGroup18}
            srcSet={`
              ${colliersGroup18} 354w,
              ${colliersGroup18_2x} 708w
            `}
            sizes='
              (max-width: 600px) 354px,
              708px
            '
          />
        </section>
        <div>
          <p className='project-section-header'>Custom Projects</p>
          <p className='project-section-description'>
            Properties receive custom marketing collaterals depending on factors such as price,
            building size, location, or who the client is.
          </p>
        </div>
        <section className='image-container'>
          <div className='image-container-row'>
            <img
              alt='colliers willmore holiday'
              src={colliersWillmoreHoliday}
              srcSet={`
                ${colliersWillmoreHoliday} 354w,
                ${colliersWillmoreHoliday2x} 708w
              `}
              sizes='
                (max-width: 600px) 354px,
                708px
              '
            />
            <div className='image-container-short'>
              <img
                alt='colliers happy new year 2020'
                src={colliersHappyNewYear2020}
                srcSet={`
                  ${colliersHappyNewYear2020} 172w,
                  ${colliersHappyNewYear2020_2x} 344w
                `}
                sizes='
                  (max-width: 600px) 172px,
                  344px
                '
              />
              <img
                alt='colliers office holiday 2020'
                src={colliersOfficeHoliday2020}
                srcSet={`
                  ${colliersOfficeHoliday2020} 172w,
                  ${colliersOfficeHoliday2020_2x} 344w
                `}
                sizes='
                  (max-width: 600px) 172px,
                  344px
                '
              />
            </div>
          </div>
          <img
            alt='colliers monthly perk poster'
            src={colliersMonthlyPerkPosters}
            srcSet={`
              ${colliersMonthlyPerkPosters} 354w,
              ${colliersMonthlyPerkPosters2x} 708w
            `}
            sizes='
              (max-width: 600px) 354px,
              708px
            '
          />
        </section>
        <div>
          <p className='project-section-header'>In-House Projects</p>
          <p className='project-section-description'>
            In-house projects consisted of posters of events happening in the office. It also
            includes social assets created for different broker teams, such as holiday greetings.
          </p>
        </div>
      </main>
      <footer>
        <footer className='footer-links-container'>
          <span>
            <Link to='/portfolio/digital-journal'>
              <p className='footer-link'>{'<< 01. Digital Journal'}</p>
            </Link>
          </span>
          <span>
            <Link to='/portfolio/trek-for-trees'>
              <p className='footer-link'>{'03. Trek for Trees >>'}</p>
            </Link>
          </span>
        </footer>
        <div className='footer-rectangle'/>
      </footer>
    </>
  )
}

export default Colliers;
