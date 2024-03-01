import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Header from '../Header/Header';
import About from '../About/About';
import AboutNavButton from '../AboutNavButton/AboutNavButton';
import AdoptableCreatures from '../AdoptableCreatures/AdoptableCreatures';
import AdoptableCreaturesNavButton from '../AdoptableCreaturesNavButton/AdoptableCreaturesNavButton';
import CreatureDetail from '../CreatureDetail/CreatureDetail';
import NotFound from '../NotFound/NotFound';

const App = () => {
  const location = useLocation();
  const isAdoptPage = location.pathname === '/adoptable-creatures';
  const isAboutPage = location.pathname === '/about';

  return (
    <main className='App'>
      <Header isAdoptPage={isAdoptPage} isAboutPage={isAboutPage}>
        {isAdoptPage ? null : (<AdoptableCreaturesNavButton />)}
        {isAboutPage ? null : (<AboutNavButton />)}
      </Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/adoptable-creatures' element={<AdoptableCreatures />} />
        <Route path='/adoptable-creatures/:index' element={<CreatureDetail />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default App;
