import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

// virtual dom (react element tree) must equal DOM

const colorList = [ 'blue', 'yellow', 'orange', 'hot pink'];

const cars = [
  {
    id: 1,
    make: 'Tesla',
    model: 'S',
    year: 2018,
    color: 'red',
    price: 75000,
  },
  {
    id: 2,
    make: 'Kia',
    model: 'Optima',
    year: 2016,
    color: 'white',
    price: 30000,
  },
];

ReactDOM.render(
  //React.createElement(HelloWorld),
  <>
    <ColorTool colors={colorList}/>
    <CarTool cars={cars}/>
  </>,
  document.querySelector('#root'),
);