import './App.scss';
import { Route, Routes} from 'react-router-dom';
import About from './components/about';
import Home from './components/home/home';
import Layout from './components/layout/layout';
import NoMatch from './components/noMatch';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
