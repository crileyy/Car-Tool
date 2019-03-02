import React from 'react';
import PropTypes from 'prop-types';

export const CarViewRow = ({ car, deleteCar, toggleEdit }) => {

  return <tr>
    <td>{car.id}</td>
    <td>{car.make}</td>
    <td>{car.model}</td>
    <td>{car.year}</td>
    <td>{car.color}</td>
    <td>{car.price}</td>
    <td><button type="button" onClick={() => toggleEdit(car.id)}>Edit Car</button>
    <button type="button" onClick={() => deleteCar(car.id)}>Delete Car</button></td>
  </tr>;
};

CarViewRow.propTypes = {
  car: PropTypes.shape({
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
  }),
  deleteCar: PropTypes.func,
  toggleEdit: PropTypes.func,
}