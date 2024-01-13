import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Header from '../Header/Header';
import AdoptableCreatures from '../AdoptableCreatures/AdoptableCreatures';
import AdoptableCreaturesNavButton from '../AdoptableCreaturesNavButton/AdoptableCreaturesNavButton';
import CreatureDetail from '../CreatureDetail/CreatureDetail';

const App = () => {
  const location = useLocation();
  const isAdoptPage = location.pathname === '/adoptable-creatures';

  return (
    <main className='App'>
      <Header isAdoptPage={isAdoptPage}>
        {isAdoptPage ? null : (
          <AdoptableCreaturesNavButton />
        )}
      </Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/adoptable-creatures' element={<AdoptableCreatures />} />
        <Route path='/adoptable-creatures/:index' element={<CreatureDetail />} />
      </Routes>
    </main>
  );
};

export default App;
