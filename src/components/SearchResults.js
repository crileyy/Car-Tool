import React from 'react';
import { ResultRow } from './ResultRow';

export const SearchResults = ({ search, cars }) => {

  const containsSearch = (search, car) => {
    return car.id.toString().includes(search) || car.make.includes(search)
      || car.model.includes(search) || car.color.includes(search)
      || car.year.toString().includes(search) || car.price.toString().includes(search);
  };

  return <>
    <div>{search}</div>
    <ul>
      {cars.filter(car => containsSearch(search, car))
        .map(car => <ResultRow car={car} key={car.id} />)}
    </ul>
  </>;
};