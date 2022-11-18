import './App.scss';
import { Route, Routes} from 'react-router-dom';

import About from './components/about/about';
import Home from './components/home/home';
import Layout from './components/layout/layout';
import NoMatch from './components/noMatch';
import Portfolio from './components/portfolio/portfolioComponent';
import Resume from './components/resume/resume';

function App() {
  return (
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='/' element={<Layout />}>
        <Route path='about' element={<About />} />
        <Route path='portfolio/*' element={<Portfolio />} />
        <Route path='resume' element={<Resume />} />
        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
