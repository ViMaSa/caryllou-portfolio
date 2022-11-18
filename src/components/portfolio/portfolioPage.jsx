import { Link } from "react-router-dom";

const PortfolioPage = () => {
  return (
    <div className="slideUp">
      <div>
        <h1>Portfolio</h1>
      </div>
      <ul>
        <li><Link to='colliers'>Colliers</Link></li>
        <li><Link to='digital-journal'>Digital Journal</Link></li>
        <li><Link to='trek-for-trees'>Trek for Trees</Link></li>
        <li><Link to='life-aquatic'>Life Aquatic</Link></li>
      </ul>
    </div>
  )
}

export default PortfolioPage;
