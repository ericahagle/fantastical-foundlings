import './CreatureCard.css';

const CreatureCard = ({ creature }) => {
  return (
    <li className='CreatureCard'>
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

export default CreatureCard;
