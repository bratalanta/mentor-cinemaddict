import React, { useState } from 'react';
import { SortOptionValue } from '../../../types/sort';
import SortItem from '../SortItem/SortItem';

const sortOptionList: SortOptionValue[] = ['default', 'date', 'rating'];

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
