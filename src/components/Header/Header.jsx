import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <Link className='app-title-link' reloadDocument to='/'>
        <h1 className='app-title'>Fantastical Foundlings</h1>
      </Link>
      <Link className='adoptable-creatures-nav-link'>
        <button className='adoptable-creatures-nav-button'>Adoptable Creatures</button>
      </Link>
    </header>
  );
};

export default Header;
