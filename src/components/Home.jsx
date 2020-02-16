
import React from 'react';
import redTheme from '../assets/images/red.jpg';
import Navbar from './Navbar';


function Home() {
  
  var background = {
    backgroundImage: `url(${redTheme})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%'
  };

  let headerStyles = {
    fontSize: '150px',
    fontWeight: 'bold',
    color: 'white'      
  };

  return (
    <div style={background}>
      <Navbar />
      <div>
        <h1 style={headerStyles}>Beer Shack</h1>
      </div> 
    </div>
  );
}

export default Home;  