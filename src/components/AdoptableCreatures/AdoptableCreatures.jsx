import { useState, useEffect } from 'react';
import './AdoptableCreatures.css';
import getAllCreatures from '../../apiCalls';
import CreatureCard from '../CreatureCard/CreatureCard';

const AdoptableCreatures = () => {
  const [creatures, setCreatures] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const savedCreatures = localStorage.getItem('creatures');
    if (savedCreatures) {
      setCreatures(JSON.parse(savedCreatures))
    } else {
      getAllCreatures()
        .then((creatures) => {
          setCreatures(creatures);
          localStorage.setItem('creatures', JSON.stringify(creatures));
        });
    }
  }, []);

  return (
    <div className='AdoptableCreatures'>
      <h2 className='page-title font-face-modesto-expanded'>Adoptable Creatures</h2>
      {creatures.length === 0 && <span className='loading'>Loading...</span>}
      <ul className='creature-list'>
        {creatures.map((creature) => (
          creature.image &&
          <CreatureCard key={creature.index} creature={creature} />
        ))}
      </ul>
    </div>
  );
};

export default AdoptableCreatures;
