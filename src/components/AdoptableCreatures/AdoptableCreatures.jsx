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
  const [selectedTypeFilter, setSelectedTypeFilter] = useState('');
  const [selectedAlignmentFilter, setSelectedAlignmentFilter] = useState('');

  const selectCreature = (creature) => {
    setSelectedCreature(creature);
  };

  const clearCreatureSelection = () => {
    setSelectedCreature(null);
  };

  const handleSizeFilterChange = (sizeFilter) => {
    setSelectedSizeFilter(sizeFilter);
  }

  const handleTypeFilterChange = (typeFilter) => {
    setSelectedTypeFilter(typeFilter);
  }

  const handleAlignmentFilterChange = (alignmentFilter) => {
    setSelectedAlignmentFilter(alignmentFilter);
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
    if (selectedSizeFilter || selectedTypeFilter || selectedAlignmentFilter) {
      const filtered = creatures.filter((creature) => {
        const sizeCondition = !selectedSizeFilter || creature.size === selectedSizeFilter;
        const typeCondition = !selectedTypeFilter || creature.type === selectedTypeFilter;
        const alignmentCondition = !selectedAlignmentFilter || creature.alignment === selectedAlignmentFilter;
        return sizeCondition && typeCondition && alignmentCondition;
      });
      setFilteredCreatures(filtered);
    } else {
      setFilteredCreatures(creatures);
    }
  }, [selectedSizeFilter, selectedTypeFilter, selectedAlignmentFilter, creatures]);

  return (
    <div className='AdoptableCreatures'>
      <h2 className='page-title font-face-modesto-expanded'>Adoptable Creatures</h2>
      {creatures.length === 0 && <span className='loading'>Loading...</span>}
      <CreaturesFilter
        onSizeFilterChange={handleSizeFilterChange}
        onTypeFilterChange={handleTypeFilterChange}
        onAlignmentFilterChange={handleAlignmentFilterChange}
      />
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
      {filteredCreatures.length === 0 && <span className='no-results'>No creatures match your search.</span>}
    </div>
  );
};

export default AdoptableCreatures;
