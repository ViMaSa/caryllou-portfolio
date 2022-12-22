import './layout.scss';
import { Link, Outlet } from 'react-router-dom';
import ReactModal from 'react-modal';
import { useState } from 'react';

const Layout = () => {
  const [ modalIsOpen, setIsOpen ] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <>
      <nav>
        <div className='homeButton'>
          <Link to='/' ><p>clp.</p></Link>
        </div>
        <div>
          <button onClick={openModal}>Open Modal</button>
          <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className='Modal'
            overlayClassName='Overlay'
            contentLabel='Example Modal'
          >
            <ul>
              <li onClick={closeModal}>
                <Link to='/portfolio' className='modal-font'>Portfolio</Link>
              </li>
              <li onClick={closeModal}>
                <Link to='/resume' className='modal-font'>Resume</Link>
              </li>
              <li onClick={closeModal}>
                <Link to='/about' className='modal-font'>About</Link>
              </li>
              <p onClick={closeModal} className='modal-font'>X</p>
            </ul>
          </ReactModal>
        </div>
      </nav>
      <Outlet/>
    </>
  )
}

export default Layout;
