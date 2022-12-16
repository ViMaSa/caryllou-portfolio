import { Link } from 'react-router-dom';
import './colliers.scss'
import brochures from './colliers-assets/brochures.png'
import eBlast1 from './colliers-assets/Eblasts.png'
import narrative from './colliers-assets/Narrative.png'
import eBlast2 from './colliers-assets/Eblast_2.png'
import group18 from './colliers-assets/Group 18.png'
import willmoreHoliday from './colliers-assets/WILLMORE_Holiday_GIF.png'
import happyNewYear2020 from './colliers-assets/WILLMORE_HappyNewYear2021_EMAIL_HQ.png'
import officeHoliday2020 from './colliers-assets/OFFICE1_HappyHolidays2020_EMAIL_HQ-2.png'
import monthlyPerkPosters from './colliers-assets/MonthlyPerkPosters.png'

const Colliers = () => {
  return (
    <>
      <main className='colliers-main'>
        <p className='project-number'>02</p>
        <div className='project-heading-line' />
        <p className='project-title'>Colliers</p>
        <div className='project-heading-line' />
        <p className='project-description project-description-font'>
          Colliers is a commercial real estate company. As a graphic designer for them, I worked
          with the design manager and brokers to create materials such as brochures, email
          campaigns, social assets, and posters.
        </p>
        <section className='colliers-images-container'>
          <img src={brochures} alt='Brochures' className='colliers-image'/>
          <img src={eBlast1} alt='E-Blasts1' className='colliers-image'/>
        </section>
        <div>
          <p className='colliers-section-header'>Colliers Branded Projects</p>
          <p className='colliers-section-description'>
            Most marketing materials adhere to branding guidelines. However, the layout of a page
            varies depending on the content provided.
          </p>
        </div>
        <section className='colliers-images-container'>
          <img src={narrative} alt='Narrative' className='colliers-image'/>
          <img src={eBlast2} alt='E-Blasts2' className='colliers-image'/>
          <img src={group18} alt='Group 18' className='colliers-image'/>
        </section>
        <div>
          <p className='colliers-section-header'>Custom Projects</p>
          <p className='colliers-section-description'>
            Properties receive custom marketing collaterals depending on factors such as price,
            building size, location, or who the client is.
          </p>
        </div>
        <section className='colliers-images-container'>
          <img src={willmoreHoliday} alt='Willmore Holiday' className='colliers-image'/>
          <div className='image-container-short'>
            <img src={happyNewYear2020} alt='Happy New Year 2020' className='colliers-image'/>
            <img src={officeHoliday2020} alt='Office Holiday 2020' className='colliers-image'/>
          </div>
          <img src={monthlyPerkPosters} alt='Monthly Perk Poster' className='colliers-image'/>
        </section>
        <div>
          <p className='colliers-section-header'>In-House Projects</p>
          <p className='colliers-section-description'>
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
