import { Link, Outlet } from "react-router-dom";
import './layout.scss'

const Layout = () => {
  return (
    <>
      <nav>
        <div className="homeButton">
          <Link to='/' ><p>clp.</p></Link>
        </div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
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
