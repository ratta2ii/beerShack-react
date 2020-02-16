import React from 'react';
import blueTheme from '../assets/images/blue.jpg';
import Navbar from './Navbar';
import FormBox from './FormBox';

function NewBeerForm() {

  var background = {
    backgroundImage: `url(${blueTheme})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%'
  };

  return (
    <div style={background}>
      <Navbar/>
      <FormBox /> 
    </div>
  );
}


export default NewBeerForm;

