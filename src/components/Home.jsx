
import React from 'react';
import blueTheme from '../assets/images/dual.jpg';
import Navbar from './Navbar';


function Home() {
  var background = {
    backgroundImage: `url(${blueTheme})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%'
  };

  let headerStyles = {
    fontSize: '150px',
    fontWeight: 'bold',
    color: 'white'      
  };

  return (
    <div stlyle={background}>
      <Navbar />
      <div>
        <h1 style={headerStyles}>Beer Shack</h1>
      </div> 
    </div>
  );
}

export default Home;  