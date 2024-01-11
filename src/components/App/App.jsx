import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Header from '../Header/Header';

const App = () => {
  return (
    <main className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
