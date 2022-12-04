import React, { useState } from 'react';
import { SortOptionValue } from '../../../types/sort';
import SortItem from '../SortItem/SortItem';

const sortOptionList: SortOptionValue[] = ['default', 'date', 'rating'];

const SortList = () => {
  const [activeOption, setActiveOption] = useState(0);

  const onSortClick = (option: SortOptionValue) => {
    const optionIndex = sortOptionList.indexOf(option);
    if (optionIndex !== -1) setActiveOption(optionIndex);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className='sort' onSubmit={handleSubmit}>
      {sortOptionList.map((option, index) => (
        <SortItem
          sortOption={option}
          isActive={activeOption === index}
          onSortClick={onSortClick}
          key={index}
        />
      ))}
    </form>
  );
};

export default SortList;
