import PropTypes from 'prop-types';
import './CreatureCard.css';

const CreatureCard = ({ creature, onClick }) => {
  return (
    <li className='CreatureCard' onClick={onClick}>
      <h4>{creature.name}</h4>
      {creature.image && <img className='creature-image' src={`https://www.dnd5eapi.co${creature.image}`} alt={creature.name} />}
      <p>
        <strong>Size </strong>
        {creature.size}
      </p>
      <p>
        <strong>Type </strong>
        {creature.type}
      </p>
      <p>
        <strong>Alignment </strong>
        {creature.alignment}
      </p>
    </li>
  );
};

CreatureCard.propTypes = {
  creature: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default CreatureCard;
