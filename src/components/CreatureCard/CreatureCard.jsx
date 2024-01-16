import PropTypes from 'prop-types';
import './CreatureCard.css';

const CreatureCard = ({ creature, onClick }) => {
  const capitalizeFirstLetter = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <div className='CreatureCard font-face-bookman-bt-roman-headline' onClick={onClick}>
      <h3>{creature.name}</h3>
      {creature.image && <img className='creature-image' src={`https://www.dnd5eapi.co${creature.image}`} alt={creature.name} />}

      <p>
        <strong>Size: </strong>
        <span style={{ whiteSpace: 'pre' }}> {capitalizeFirstLetter(creature.size)}</span>
      </p>
      <p>
        <strong>Type: </strong>
        <span style={{ whiteSpace: 'pre' }}> {capitalizeFirstLetter(creature.type)}</span>
      </p>
      <p>
        <strong>Alignment: </strong>
        <span style={{ whiteSpace: 'pre' }}> {capitalizeFirstLetter(creature.alignment)}</span>
      </p>
    </div>

  );
};

CreatureCard.propTypes = {
  creature: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default CreatureCard;
