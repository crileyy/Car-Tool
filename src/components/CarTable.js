import React from 'react';
import PropTypes from 'prop-types';
import { CarViewRow } from './CarViewRow';
import { EditCarRow } from './EditCarRow';

export const CarTable = ({ cars, deleteCar, updateCar, toggleEdit, editCarId }) => {

  return <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
        <th>Color</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {cars.map(car => car.id === editCarId 
        ? <EditCarRow car={car} toggleEdit={toggleEdit} updateCar={updateCar} key={car.id}/> 
        : <CarViewRow car={car} deleteCar={deleteCar} toggleEdit={toggleEdit} key={car.id}/>)}
    </tbody>

  </table>;
};

CarTable.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    make: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    color: PropTypes.string,
    price: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  })).isRequired,
  deleteCar: PropTypes.func,
  updateCar: PropTypes.func,
};

CarTable.defaultProps = {
  cars: [],
};