import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ToolHeader } from './ToolHeader';


export const ColorTool = ({ colors }) => {

  // Destructuring => const { colors } = props;

  //IMPORTANT RULE: anything passed in via props can never ever be mutated
  // props are frozen

  // To be a react developer, you must understand how memory is managed in JavaScript

  const [ state, setState ] = useState({
    colors: colors.concat(),
    newColor: '',
  });

  const change = (e) => {
    setState({
      ...state,
      // newColor: e.target.value,
      [ e.target.name ]: e.target.value,
    });
  };

  const addColor = () => {
    setState({
      colors: state.colors.concat(state.newColor),
      newColor: '',
    })
  };

  return <>
    <ToolHeader headerText="Color Tool"/>
    <ul>
      {state.colors.map(color => <li key={color}>{color}</li>)}
    </ul>
    <form>
      <div>
        <label htmlFor="color-input">New Color</label>
        <input type="text" id="color-input" name="newColor"
         value={state.newColor} onChange={change} />
      </div>
      <button type="button" onClick={addColor}>Add Color</button>
    </form>
  </>

};

// include proptypes with components
ColorTool.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
}