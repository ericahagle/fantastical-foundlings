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
  const [selectedSizeFilter, setSelectedSizeFilter] = useState('');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState('');
  const [selectedAlignmentFilter, setSelectedAlignmentFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const selectCreature = (selectedCreature) => {
    setSelectedCreature(selectedCreature);
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
      setLoading(false);
      setCreatures(JSON.parse(savedCreatures))
    } else {
      setLoading(true);
      getAllCreatures()
        .then((creatures) => {
          const creaturesWithImage = creatures.filter((creature) => creature.image);
          setCreatures(creaturesWithImage);
          localStorage.setItem('creatures', JSON.stringify(creaturesWithImage));
        })
        .catch((error) => {
          console.error(error);
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        })
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

  if (error) {
    return <div className='error-message'>{error}</div>;
  }

  return (
    <div className='AdoptableCreatures'>
      <h2 className='page-title font-face-modesto-expanded'>Adoptable Creatures</h2>
      {loading && <span className='loading'>Loading...</span>}
      {!loading && (
        <>
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
                <CreatureCard key={creature.index} creature={creature} onClick={() => selectCreature(selectedCreature)} />
              </Link>
            ))}
          </ul>
          {filteredCreatures.length === 0 && <span className='no-results'>No creatures match your search.</span>}
        </>
      )}
    </div>
  );
};

export default AdoptableCreatures;
