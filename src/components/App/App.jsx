import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Header from '../Header/Header';
import AdoptableCreatures from '../AdoptableCreatures/AdoptableCreatures';

const App = () => {

  return (
    <main className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/adoptable-creatures' element={<AdoptableCreatures />} />
      </Routes>
    </main>
  );
};

export default App;
