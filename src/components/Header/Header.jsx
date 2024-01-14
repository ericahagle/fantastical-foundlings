import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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

Header.propTypes = {
  children: PropTypes.element,
  isAdoptPage: PropTypes.bool.isRequired
}

export default Header;
