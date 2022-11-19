import { Link } from "react-router-dom";

const PortfolioPage = () => {
  return (
    <>
      <h1>Portfolio</h1>
      <ul>
        <li><Link to='colliers'>Colliers</Link></li>
        <li><Link to='digital-journal'>Digital Journal</Link></li>
        <li><Link to='trek-for-trees'>Trek for Trees</Link></li>
        <li><Link to='life-aquatic'>Life Aquatic</Link></li>
      </ul>
    </>
  )
}

export default PortfolioPage;
