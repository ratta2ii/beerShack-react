import React from 'react';
import PropTypes from 'prop-types';
import beer3 from '../assets/images/beer3.png';


function Beer(props) {

  return (
    <div>
      <div style={productsContainer}>
        <div style={leftColumn}>
          <img style={beerImage} src={beer3} />
        </div>
        <div style={rightColumn}>
          <h3 style={beerName}>{props.names}</h3>
          <h4 style={beerBrand}>Brand: {props.brand}</h4>
          <h4 style={content}>Alcohol Content: <span style={contentNumber}>{props.alcoholContent}</span></h4>
          <h4 style={content}>Remaining Pints: <span style={contentNumber}>{props.pintsRemaining}</span></h4>
          <h4 style={beerPrice}>Price: <span style={beerDollars}>{props.price}</span></h4>
        </div>
      </div>
    </div>
  );
}

Beer.propTypes = {
  names: PropTypes.string,
  brand: PropTypes.string,
  alcoholContent: PropTypes.string,
  price: PropTypes.string
  // pintsRemaining: PropTypes.number
};


export default Beer;


let productsContainer = {
  width: '90%',
  margin: '0 auto 35px auto',
  backgroundColor: 'white',
  display: 'grid',
  gridTemplateColumns: '150px 2fr',
  // gridTemplateColumns: '1fr 2fr',
  border: '40px solid rgb(255, 193, 80)'
  // webkitBoxhadow: '5px 5px 15px 9px rgb(15, 12, 12)',
  // boxShadow: '5px 5px 15px 9px rgb(15, 12, 12)'
};

let leftColumn = {
  gridArea: '1 / 1 / 2 / 2',
  padding: '35px 0 20px 60px',
  zIndex: '1'
};

let rightColumn = {
  gridArea: '1 / 2 / 2 / 3',
  marginLeft: '50px'
};

let beerImage = {
  height: '200px',
  width: '80px'
};

let beerName = {
  fontSize: '40px',
  padding: '0',
  margin: '30px 0 10px 0',
};

let beerBrand = {
  fontSize: '20px',
  margin: '0 0 10px 0',
  padding: '0'
};

let content = {
  margin: '0 0 10px 0',
  fontSize: '20px'
};

let contentNumber = {
  fontSize: '20px'
};

let beerPrice = {
  fontSize: '20px',
  marginTop: '25px'
};

let beerDollars = {
  fontSize: '30px'
};


