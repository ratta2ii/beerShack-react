import React from 'react';
//import blueBg from '../assets/images/blue.jpg';
import Navbar from './Navbar';
import FormBox from './FormBox';

export default function NewBeerForm() {

  // var background = {
  //   backgroundImage: `url(${blueBg})`,
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: '100% 100%',
  //   position: 'absolute',
  //   top: '0',
  //   left: '0',
  //   width: '100%',
  //   height: '100%'
  // };

  return (
    <div>
      <Navbar/>
      <FormBox /> 
    </div>
  );
}

