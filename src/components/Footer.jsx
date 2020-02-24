import React from 'react';
import { Link } from 'react-router-dom';



function Footer() {

  var background = {
    backgroundColor: 'black',
    width: '100%',
    padding: '10px',
    textAlign: 'center',
    opacity: '0.9',
    fontSize: '15px',
    color: '#ffc150',
    marginTop: '460px',

  };

  return (
    <div style={background}>
      <div>
        <h1>Bottom of the Barrel</h1>
      </div> 
    </div>
  );
}

export default Footer;  