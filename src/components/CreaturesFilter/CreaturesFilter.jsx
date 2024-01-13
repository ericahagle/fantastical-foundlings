import { useEffect, useState } from 'react';
import './CreaturesFilter.css';

const CreaturesFilter = ({ onSizeFilterChange, onTypeFilterChange }) => {
  const [selectSizeFilter, setSelectSizeFilter] = useState('');
  const [selectTypeFilter, setSelectTypeFilter] = useState('');

  useEffect(() => {
    onSizeFilterChange(selectSizeFilter);
    onTypeFilterChange(selectTypeFilter)
  }, [selectSizeFilter, selectTypeFilter, onSizeFilterChange, onTypeFilterChange]);

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

      {/* <label htmlFor='select-alignment'>Filter By Alignment
        <select>

        </select>
      </label> */}

    </div>
  );
};

export default CreaturesFilter;
