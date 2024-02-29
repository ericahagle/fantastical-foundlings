import './AboutNavButton.css';
import { Link } from 'react-router-dom';

const AboutNavButton = () => {
  return (
    <Link className='nav-link' to='/about'>
      <button className='nav-button font-face-modesto-expanded'>
        About Us
      </button>
    </Link>
  );
};

export default AboutNavButton;