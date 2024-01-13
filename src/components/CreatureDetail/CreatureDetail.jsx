import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './CreatureDetail.css';
import { getCreatureByIndex } from '../../apiCalls';

const CreatureDetail = () => {
  const { index } = useParams();
  const [selectedCreature, setSelectedCreature] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (index) {
      getCreatureByIndex(index)
        .then((data) => {
          setSelectedCreature(data)
        })
        .catch((error) => {
          console.error(error);
          setError(error.message);
        })
    }
  }, [index]);

  if (!selectedCreature) {
    return <div>Loading...</div>;
  }

  return (
    <div className='CreatureDetail'>
      <h2 className='creature-name'>{selectedCreature.name}</h2>
      {selectedCreature.image && (
        <img className='selected-creature-image'
          src={`https://www.dnd5eapi.co${selectedCreature.image}`}
          alt={selectedCreature.name}
        />
      )}
      <p>
        <strong>Size </strong>
        {selectedCreature.size}
      </p>
      <p>
        <strong>Type </strong>
        {selectedCreature.type}
      </p>
      <p>
        <strong>Alignment </strong>
        {selectedCreature.alignment}
      </p>
      <p>
        <strong>Armor Class </strong>
        {selectedCreature.armor_class[0].value}
      </p>
      <p>
        <strong>Walk Speed </strong>
        {selectedCreature.speed.walk}
        <strong> Fly Speed </strong>
        {selectedCreature.speed.fly}
        <strong> Swim Speed </strong>
        {selectedCreature.speed.swim}
      </p>
      <p>
        <strong>Hit Points </strong>
        {selectedCreature.hit_points}
      </p>
      <p>
        <strong>Strength </strong>
        {selectedCreature.strength}
      </p>
      <p>
        <strong>Dexterity </strong>
        {selectedCreature.dexterity}
      </p>
      <p>
        <strong>Constitution </strong>
        {selectedCreature.constitution}
      </p>
      <p>
        <strong>Intelligence </strong>
        {selectedCreature.intelligence}
      </p>
      <p>
        <strong>Wisdom </strong>
        {selectedCreature.wisdom}
      </p>
      <p>
        <strong>Charisma </strong>
        {selectedCreature.charisma}
      </p>
      <p>
        <strong>Languages </strong>
        {selectedCreature.languages}
      </p>
      <p>
        <strong>Special Abilities </strong>
        {selectedCreature.special_abilities.map((ability) => 
        (<p>{ability.name}: {ability.desc}</p>))}
      </p>
      <p>
        <strong>Actions </strong>
        {selectedCreature.actions.map((action) => 
        (<p>{action.name}: {action.desc}</p>))}
      </p>
      <p>
        <strong>Legendary Actions </strong>
        {selectedCreature.legendary_actions.map((legendary_action) => 
        (<p>{legendary_action.name}: {legendary_action.desc}</p>))}
      </p>
    </div>
  );
};

export default CreatureDetail;
