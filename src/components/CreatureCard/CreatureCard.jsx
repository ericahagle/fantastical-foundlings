import PropTypes from 'prop-types';
import './CreatureCard.css';

const CreatureCard = ({ creature, onClick }) => {
  return (
    <li className='CreatureCard font-face-bookman-bt-roman-headline' onClick={onClick}>
      <h4>{creature.name}</h4>
      {creature.image && <img className='creature-image' src={`https://www.dnd5eapi.co${creature.image}`} alt={creature.name} />}
      
      <p>
        <strong>Size: </strong>
        <span style={{whiteSpace: 'pre'}}> {creature.size}</span>
      </p>
      <p>
        <strong>Type: </strong>
        <span style={{whiteSpace: 'pre'}}> {creature.type}</span>
      </p>
      <p>
        <strong>Alignment: </strong>
        <span style={{whiteSpace: 'pre'}}> {creature.alignment}</span>
      </p>
    </li>
  );
};

CreatureCard.propTypes = {
  creature: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default CreatureCard;
