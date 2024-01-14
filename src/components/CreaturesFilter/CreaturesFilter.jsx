import { useEffect, useState } from 'react';
import './CreaturesFilter.css';

const CreaturesFilter = ({ onSizeFilterChange, onTypeFilterChange, onAlignmentFilterChange }) => {
  const [selectSizeFilter, setSelectSizeFilter] = useState('');
  const [selectTypeFilter, setSelectTypeFilter] = useState('');
  const [selectAlignmentFilter, setSelectAlignmentFilter] = useState('');

  useEffect(() => {
    onSizeFilterChange(selectSizeFilter);
    onTypeFilterChange(selectTypeFilter);
    onAlignmentFilterChange(selectAlignmentFilter);
  }, [selectSizeFilter, selectTypeFilter, selectAlignmentFilter, onSizeFilterChange, onTypeFilterChange, onAlignmentFilterChange]);

  return (
    <div className='filter-wrapper'>

      <label htmlFor='select-size'>Filter By Size
        <select
          value={selectSizeFilter}
          id='select-size'
          onChange={(event) => {
            setSelectSizeFilter(event.currentTarget.value)
          }}
        >
          <option value=''>All Sizes</option>
          <option value='Tiny'>Tiny</option>
          <option value='Small'>Small</option>
          <option value='Medium'>Medium</option>
          <option value='Large'>Large</option>
          <option value='Huge'>Huge</option>
          <option value='Gargantuan'>Gargantuan</option>
        </select>
      </label>

      <label htmlFor='select-type'>Filter By Type
        <select
          value={selectTypeFilter}
          id='select-type'
          onChange={(event) => {
            setSelectTypeFilter(event.currentTarget.value)
          }}
        >
          <option value=''>All Types</option>
          <option value='aberration'>Aberration</option>
          <option value='beast'>Beast</option>
          <option value='construct'>Construct</option>
          <option value='dragon'>Dragon</option>
          <option value='elemental'>Elemental</option>
          <option value='fey'>Fey</option>
          <option value='humanoid'>Humanoid</option>
          <option value='monstrosity'>Monstrosity</option>
          <option value='plant'>Plant</option>
          <option value='undead'>Undead</option>
        </select>
      </label>

      <label htmlFor='select-alignment'>Filter By Alignment
        <select
          value={selectAlignmentFilter}
          id='select-alignment'
          onChange={(event) => {
            setSelectAlignmentFilter(event.currentTarget.value)
          }}
        >
          <option value=''>All Alignments</option>
          <option value='lawful good'>Lawful Good</option>
          <option value='neutral good'>Neutral Good</option>
          <option value='chaotic good'>Chaotic Good</option>
          <option value='lawful neutral'>Lawful Neutral</option>
          <option value='neutral'>(True) Neutral</option>
          <option value='chaotic neutral'>Chaotic Neutral</option>
          <option value='lawful evil'>Lawful Evil</option>
          <option value='neutral evil'>Neutral Evil</option>
          <option value='chaotic evil'>Chaotic Evil</option>
          <option value='unaligned'>Unaligned</option>
          <option value='any alignment'>Any Alignment</option>
          <option value='any non-good alignment'>Any Non-Good Alignment</option>
        </select>
      </label>

      <label htmlFor='reset-filters-button'>
        <button
          id='reset-filters-button'
          onClick={() => {
            setSelectSizeFilter('')
            setSelectTypeFilter('')
            setSelectAlignmentFilter('')
          }}
        >Reset All Filters</button>
      </label>

    </div>
  );
};

export default CreaturesFilter;
