import { Link, Outlet } from "react-router-dom";
import './layout.scss'

const Layout = () => {
  return (
    <>
      <nav className="slideUp">
        <div className="homeButton">
          <Link to='/' ><p>clp.</p></Link>
        </div>
        <ul>
          <li>
            <Link to='/portfolio'>Portfolio</Link>
          </li>
          <li>
            <Link to='/resume'>Resume</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </>
  )
}

export default Layout;
