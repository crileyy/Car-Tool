import React from 'react';

export const ResultRow = ({ car }) => {

  return <li>{car.id} {car.make} {car.model} {car.year} {car.color} {car.price}</li>;
};