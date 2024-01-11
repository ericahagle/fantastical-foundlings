import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <Link className='app-title-link' to='/'>
        <h1 className='app-title font-face-modesto-condensed'>Fantastical Foundlings</h1>
      </Link>
      <Link className='nav-link' to='/adoptable-creatures'>
        <button className='nav-button font-face-modesto-expanded'>Adoptable Creatures</button>
      </Link>
    </header>
  );
};

export default Header;
