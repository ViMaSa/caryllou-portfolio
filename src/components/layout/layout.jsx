import "./layout.scss";
import { Link, Outlet } from "react-router-dom";
import ReactModal from "react-modal";
import { useState } from "react";

ReactModal.setAppElement("#root")

const Layout = () => {
  const [ modalIsOpen, setIsOpen ] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const onAfterOpen = () => {
    document.body.style.overflow = "hidden";
  }

  const onAfterClose = () => {
    document.body.style.overflow = "unset";
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <>
      <nav>
        <div className="homeButton">
          <Link to="/" ><p>clp.</p></Link>
        </div>
        <div className="menu-bars-container" onClick={openModal}>
          <div className="menu-bar" />
          <div className="menu-bar" />
          <div className="menu-bar" />
        </div>
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          onAfterOpen={onAfterOpen}
          onAfterClose={onAfterClose}
          className="Modal"
          overlayClassName="Overlay"
          contentLabel="Example Modal"
        >
          <ul>
            <li onClick={closeModal}>
              <Link to="/portfolio" className="modal-font">Portfolio</Link>
            </li>
            <li onClick={closeModal}>
              <Link to="/resume" className="modal-font">Resume</Link>
            </li>
            <li onClick={closeModal}>
              <Link to="/about" className="modal-font">About</Link>
            </li>
            <p onClick={closeModal} className="modal-font">X</p>
          </ul>
        </ReactModal>
      </nav>
      <Outlet/>
    </>
  )
}

export default Layout;
