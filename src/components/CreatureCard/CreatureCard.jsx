import './CreatureCard.css';

const CreatureCard = ({ creature }) => {
  return (
    <li className='CreatureCard'>
      <hgroup>
        <h4>{creature.name}</h4>
        <small>
          {`Size: ${creature.size} `}
          {`Type: ${creature.type} `}
          {`Alignment: ${creature.alignment} `}
        </small>
      </hgroup>
    </li>
  );
};

export default CreatureCard;