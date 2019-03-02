import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = ({ cars }) => {

  const [ state, setState ] = useState({
    cars: cars.concat(),
    editCarId: '',
  });

  const toggleEdit = (carId) => {
    setState({
      ...state,
      editCarId: carId,
    });
  };

  const addCar = (newCar) => {
    newCar.id = state.cars[state.cars.length - 1].id + 1;
    setState({
      ...state,
      cars: state.cars.concat(newCar),
      editCarId: '',
    })
  }

  const updateCar = (updateCar) => {

    console.log(updateCar);
    setState({
      ...state,
      cars: state.cars.map(car => car.id === updateCar.id ? updateCar : car),
      editCarId: '',
    })
  };

  const deleteCar = (carId) => {
    setState({
      ...state,
      cars: state.cars.filter(car => car.id !== parseInt(carId)),
      editCarId: '',
    })
  };

  return <>
    <ToolHeader headerText="Car Tool"/>
    <CarTable cars={state.cars} deleteCar={deleteCar} updateCar={updateCar} toggleEdit={toggleEdit} editCarId={state.editCarId}/>
    <CarForm buttonText="Add Car" onAddCar={addCar}/>
  </>;
};

CarTool.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    make: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.number,
    color: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
};

CarTool.defaultProps = {
  cars: [],
};