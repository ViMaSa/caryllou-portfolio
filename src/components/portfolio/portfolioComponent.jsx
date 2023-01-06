import "./portfolio.scss";
import { Outlet, Route, Routes } from "react-router-dom";
import Colliers from "./colliers/colliers";
import DigitalJournal from "./digitalJournal/digitalJournal";
import LifeAquatic from "./lifeAquatic/lifeAquatic";
import NoMatch from "../noMatch";
import PortfolioPage from "./portfolioPage";
import TrekForTrees from "./trekForTrees/trekForTrees";

const Portfolio = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<PortfolioPage />} />
        <Route path="colliers" element={<Colliers />} />
        <Route path="digital-journal" element={<DigitalJournal />} />
        <Route path="trek-for-trees" element={<TrekForTrees />} />
        <Route path="life-aquatic" element={<LifeAquatic />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Outlet />
    </>
  )
}

export default Portfolio;
