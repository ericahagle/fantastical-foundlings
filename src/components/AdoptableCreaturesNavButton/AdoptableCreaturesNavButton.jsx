import './AdoptableCreaturesNavButton.css';
import { Link } from 'react-router-dom';

const AdoptableCreaturesNavButton = () => {
  return (
    <Link className='nav-link' to='/adoptable-creatures'>
      <button className='nav-button font-face-modesto-expanded'>Adoptable Creatures</button>
    </Link>
  );
};

export default AdoptableCreaturesNavButton;
