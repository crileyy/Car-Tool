import React from 'react';

export const SearchBar = ({ updateSearch, searchValue }) => {

  // 1. search -> filter car table to show the searched car
  // 2. search -> searched car appears below the bar, table still appears
  return <input type="text" placeholder="Search" value={searchValue} onChange={updateSearch} />;
};