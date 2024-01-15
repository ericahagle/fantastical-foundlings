import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './CreatureDetail.css';
import { getCreatureByIndex } from '../../apiCalls';

const CreatureDetail = () => {
  const { index } = useParams();
  const [selectedCreature, setSelectedCreature] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const renderElementIfExists = (label, value) => {
    if (value) {
      return (
        <p className='paragraph-of-details'>
          <strong className='detail-category'>{label}: </strong>
          {value}
        </p>
      );
    };
    return null;
  };

  const renderArrayIfExists = (label, array) => {
    if (array && array.length > 0) {
      return (
        <div className='array-of-details'>
          <p className='detail-array-items'>
            <strong className='detail-category'>{label} </strong>
          </p>
          {array.map((item) => (
            <p className='detail-description' key={item.name}>{item.name}: {item.desc}</p>
          ))}
        </div>
      );
    };
    return null;
  };

  useEffect(() => {
    if (index) {
      setLoading(true);
      getCreatureByIndex(index)
        .then((data) => {
          setSelectedCreature(data)
        })
        .catch((error) => {
          console.error(error);
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [index]);

  if (error) {
    return <div className='error-message'>{error}</div>;
  }

  return (
    <div className='CreatureDetail'>
      {loading && <span className='loading'>Loading...</span>}
      {!loading && (
        <div className='creature-detail-container'>
          <div className='left-side'>
            <h2 className='creature-name'>{selectedCreature.name}</h2>
            {selectedCreature.image && (
              <img className='selected-creature-image'
                src={`https://www.dnd5eapi.co${selectedCreature.image}`}
                alt={selectedCreature.name}
              />
            )}
          </div>

          <div className='right-side'>
            {renderElementIfExists('Size', selectedCreature.size)}
            {renderElementIfExists('Type', selectedCreature.type)}
            {renderElementIfExists('Alignment', selectedCreature.alignment)}
            {renderElementIfExists('Armor Class', selectedCreature.armor_class[0].value)}
            {renderElementIfExists('Walk Speed', selectedCreature.speed.walk)}
            {renderElementIfExists('Fly Speed', selectedCreature.speed.fly)}
            {renderElementIfExists('Swim Speed', selectedCreature.speed.swim)}
            {renderElementIfExists('Hit Points', selectedCreature.hit_points)}
            {renderElementIfExists('Strength', selectedCreature.strength)}
            {renderElementIfExists('Dexterity', selectedCreature.dexterity)}
            {renderElementIfExists('Constitution', selectedCreature.constitution)}
            {renderElementIfExists('Intelligence', selectedCreature.intelligence)}
            {renderElementIfExists('Wisdom', selectedCreature.wisdom)}
            {renderElementIfExists('Charisma', selectedCreature.charisma)}
            {renderElementIfExists('Languages', selectedCreature.languages)}
          </div>

          <div className='full-width'>
            {renderArrayIfExists('Special Abilities', selectedCreature.special_abilities)}
            {renderArrayIfExists('Actions', selectedCreature.actions)}
            {renderArrayIfExists('Legendary Actions', selectedCreature.legendary_actions)}
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatureDetail;
