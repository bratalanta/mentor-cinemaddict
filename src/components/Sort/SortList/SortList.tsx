import React from 'react';
import { SortOptions } from '../../../const';
import SortItem from '../SortItem/SortItem';

const sortOptionList = Object.values(SortOptions);

const SortList = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className='sort' onSubmit={handleSubmit}>
      {sortOptionList.map((option, index) => (
        <SortItem sortOption={option} key={index} />
      ))}
    </form>
  );
};

export default SortList;
