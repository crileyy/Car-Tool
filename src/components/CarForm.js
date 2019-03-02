import React, { useState } from 'react';
import PropTypes from 'prop-types';

// only collects car data
export const CarForm = ({ buttonText, onAddCar}) => {

  const [state, setState] = useState({
    newCar: {
      id: '',
      make: '',
      model: '',
      year: '',
      color: '',
      price: '',
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

  const addCar = () => {
    onAddCar(state.newCar);
    setState({
      newCar: {
        id: '',
        make: '',
        model: '',
        year: '',
        color: '',
        price: '',
      },
    })
  }

  return <form>
    <div>
      <label htmlFor="make-input">New make</label>
      <input type="text" id="make-input" name="make"
        value={state.newCar.make} onChange={change} />
    </div>
    <div>
      <label htmlFor="model-input">New model</label>
      <input type="text" id="model-input" name="model"
        value={state.newCar.model} onChange={change} />
    </div>
    <div>
      <label htmlFor="year-input">New year</label>
      <input type="text" id="year-input" name="year"
        value={state.newCar.year} onChange={change} />
    </div>
    <div>
      <label htmlFor="color-input">New color</label>
      <input type="text" id="color-input" name="color"
        value={state.newCar.color} onChange={change} />
    </div>
    <div>
      <label htmlFor="price-input">New price</label>
      <input type="text" id="price-input" name="price"
        value={state.newCar.price} onChange={change} />
    </div>
    <button type="button" onClick={() => addCar()}>{buttonText}</button>
  </form>;
};

CarForm.propTypes = {
  buttonText: PropTypes.string,
  onAddCar: PropTypes.func,
};

CarForm.defaultProps = {
  buttonText: 'Add Car',
};