import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const EditCarRow = ({ car, toggleEdit, updateCar }) => {

  const [state, setState] = useState({
    newCar: {
      ...car
    },
  });

  const change = (e) => {
    setState({
      newCar: {
        ...state.newCar,
        [e.target.name]: e.target.value,
      },
    });
  };

  return <tr>
    <td>{car.id}</td>
    <td><input type="text" id="make-input" name="make"
      value={state.newCar.make} onChange={change} /></td>
    <td><input type="text" id="model-input" name="model"
      value={state.newCar.model} onChange={change} /></td>
    <td><input type="text" id="year-input" name="year"
      value={state.newCar.year} onChange={change} /></td>
    <td><input type="text" id="color-input" name="color"
      value={state.newCar.color} onChange={change} /></td>
    <td><input type="text" id="price-input" name="price"
      value={state.newCar.price} onChange={change} /></td>
    <td><button type="button" onClick={() => updateCar(state.newCar)}>Save</button>
      <button type="button" onClick={() => toggleEdit('')}>Cancel</button></td>
  </tr>;
};

EditCarRow.propTypes = {
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
  })
};