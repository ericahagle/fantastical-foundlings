import { useEffect, useState } from 'react';
import './CreaturesFilter.css';

const CreaturesFilter = ({ onSizeFilterChange }) => {
  const [selectSizeFilter, setSelectSizeFilter] = useState('');

  useEffect(() => {
    onSizeFilterChange(selectSizeFilter);
    console.log(selectSizeFilter);
  }, [selectSizeFilter, onSizeFilterChange]);

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
        <select />
      </label>
      <label htmlFor='select-alignment'>Filter By Alignment
        <select />
      </label>
    </div>
  );
};

export default CreaturesFilter;
