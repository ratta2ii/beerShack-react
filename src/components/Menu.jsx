import React from 'react';
import BeerList from './BeerList';
import Navbar from './Navbar';

export default function Menu() {

  var parent = {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(12, 1fr)',
    gridColumnGap: '0px',
    gridRowGap: '0px'
  };

  var navDiv = {
    backgroundColor: 'cornflowerblue',
    gridArea: '1 / 1 / 2 / 13',
  };

  var leftColumn = {
    backgroundColor: '#121430',
    gridArea: '2 / 1 / 8 / 4'
  };

  var title = {
    backgroundColor: 'gray',
    gridArea: '2 / 4 / 3 / 10'
  };

  var main = {
    backgroundColor: '#E15554',
    gridArea: '3 / 4 / 8 / 10'
  };

  var rightColumn = {
    backgroundColor: '#3BB273',
    gridArea: '2 / 10 / 8 / 13'
  };

  return (
    <div>
      <div style={parent}>
        <div style={navDiv}> 
          <Navbar />
        </div>
        <div style={leftColumn}> </div>
        <div style={title}>
           <h1>Check out Our Products</h1>
         </div>
        <div style={main}>
          <BeerList />
        </div>
        <div style={rightColumn}> </div>
      </div>
    </div>

  );
}