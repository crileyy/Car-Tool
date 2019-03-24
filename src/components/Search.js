import React, { useState, useEffect } from 'react';
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';
import { ToolHeader } from './ToolHeader';

export const Search = ({ cars }) => {

  const [search, setSearch] = useState('');

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    document.title = `${search}`;
  });

  return <>
    <ToolHeader headerText="Search for cars"/>
    <SearchBar updateSearch={updateSearch} searchValue={search} />
    <SearchResults search={search} cars={cars} />
  </>;
};