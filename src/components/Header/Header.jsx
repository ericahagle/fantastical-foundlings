import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ children, isAdoptPage }) => {
  return (
    <header>
      <Link className='app-title-link' to='/'>
        <h1 className='app-title font-face-modesto-condensed'>Fantastical Foundlings</h1>
      </Link>
      {children}
    </header>
  );
};

export default Header;
