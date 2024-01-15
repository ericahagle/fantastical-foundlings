import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
    <div className='CreaturesFilter font-face-bookman-bt-roman-headline'>

      <label htmlFor='select-size'>Filter By Size
        <select
          value={selectSizeFilter}
          id='select-size'
          className='select font-face-bookman-bt-roman-headline'
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
          className='select font-face-bookman-bt-roman-headline'
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
          className='select font-face-bookman-bt-roman-headline'
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

      <button
        id='reset-filters-button'
        className='reset-filters-button font-face-modesto-expanded'
        onClick={() => {
          setSelectSizeFilter('')
          setSelectTypeFilter('')
          setSelectAlignmentFilter('')
        }}
      >Reset All Filters</button>

    </div>
  );
};

CreaturesFilter.propTypes = {
  onAlignmentFilterChange: PropTypes.func.isRequired,
  onSizeFilterChange: PropTypes.func.isRequired,
  onTypeFilterChange: PropTypes.func.isRequired
}

export default CreaturesFilter;
