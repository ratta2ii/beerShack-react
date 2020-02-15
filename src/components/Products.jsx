import React from 'react';
import BeerList from './BeerList';
//import panther from '../assets/images/panther.jpg';
import colors from '../assets/images/colors.jpg';
import Navbar from './Navbar';

export default function Products() {

  var background = {
    backgroundImage: `url(${colors})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%'
  };

  var parent = {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'auto',
    gridColumnGap: '0px',
    gridRowGap: '0px'
  };

  var navDiv = {
    // backgroundColor: 'black',
    gridArea: '1 / 1 / 2 / 13'
  };

  var leftColumn = {
    // backgroundColor: 'black',
    gridArea: '2 / 1 / 8 / 4'
  };

  var title = {
    backgroundColor: 'black',
    gridArea: '2 / 4 / 3 / 10',
    textAlign: 'center',
    padding: '40px',
    color: 'white',
    fontSize: '30px',
    opacity: '0.8',
  };

  var main = {
    // backgroundColor: 'black',
    gridArea: '3 / 4 / 8 / 10'
  };

  var rightColumn = {
    gridArea: '2 / 10 / 8 / 13'
  };

  return (
    <div style={background}>
      <div style={parent}>
        <div style={navDiv}>
          <Navbar />
        </div>
        <div style={leftColumn}>
        </div>
        <div style={title}>
          <h1>Specialty Beers</h1>
        </div>
        <div style={main}>
          <BeerList />
        </div>
        <div style={rightColumn}> </div>
      </div>
    </div>

  );
}