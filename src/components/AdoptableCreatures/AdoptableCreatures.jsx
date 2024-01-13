import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AdoptableCreatures.css';
import { getAllCreatures } from '../../apiCalls';
import CreatureCard from '../CreatureCard/CreatureCard';
import CreaturesFilter from '../CreaturesFilter/CreaturesFilter';

const AdoptableCreatures = () => {
  const [creatures, setCreatures] = useState([]);
  const [filteredCreatures, setFilteredCreatures] = useState([]);
  const [selectedCreature, setSelectedCreature] = useState(null);
  const [error, setError] = useState('');
  const [selectedSizeFilter, setSelectedSizeFilter] = useState('');

  const selectCreature = (creature) => {
    setSelectedCreature(creature);
  };

  const clearCreatureSelection = () => {
    setSelectedCreature(null);
  };

  const handleSizeFilterChange = (sizeFilter) => {
    setSelectedSizeFilter(sizeFilter);
  }

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

  useEffect(() => {
    if (selectedSizeFilter) {
      const filtered = creatures.filter((creature) => creature.size === selectedSizeFilter);
      setFilteredCreatures(filtered);
    } else {
      setFilteredCreatures(creatures);
    }
  }, [selectedSizeFilter, creatures]);

  return (
    <div className='AdoptableCreatures'>
      <h2 className='page-title font-face-modesto-expanded'>Adoptable Creatures</h2>
      {creatures.length === 0 && <span className='loading'>Loading...</span>}
      <CreaturesFilter onSizeFilterChange={handleSizeFilterChange} />
      <ul className='creature-list'>
        {filteredCreatures.map((creature) => (
          creature.image &&
          <Link to={`/adoptable-creatures/${creature.index}`}
            key={creature.index}
            className='creature-link'
          >
            <CreatureCard key={creature.index} creature={creature} onClick={() => selectCreature(creature)} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default AdoptableCreatures;
