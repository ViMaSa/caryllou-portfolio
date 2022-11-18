import { Link } from 'react-router-dom'
import { BsArrowDown } from 'react-icons/bs'
import './home.scss'

const Home = () => {
  return (
    <>
      <Link to='/portfolio' className='fadeIn'>
        <div className='App'>
          <p className='spelling slideRight'>caryl lou paayas</p>
          <p className='annunciation slideLeft'>[ka•reel loo pa•ah•yas]</p>
            <div className='arrow bounce'>
              <BsArrowDown size={30} id='arrowSvg'/>
            </div>
        </div>
      </Link>
    </>
  )
}

export default Home;
