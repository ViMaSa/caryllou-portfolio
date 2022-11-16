import './home.scss'
import { BsArrowDown } from 'react-icons/bs'

const Home = () => {
  return (
    <>
      <div className='App'>
        <p className='spelling'>caryl lou paayas</p>
        <p className='annunciation'>[ka•reel loo pa•ah•yas]</p>
        <BsArrowDown size={30} id='arrow'/>
      </div>
    </>
  )
}

export default Home;
