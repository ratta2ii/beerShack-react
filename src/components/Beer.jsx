import React from 'react';
import PropTypes from 'prop-types';
import beer6 from '../assets/images/beer6.png';


function Beer(props) {

  let productsContainer = {
    width: '90%',
    margin: '35px auto',
    backgroundColor: 'white',
    display: 'grid',
    gridTemplateColumns: '300px minmax(300px, 500px)',
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
    height: '300px',
    width: '300px'
  };

  let beerName = {
    fontSize: '70px',
    padding: '0',
    margin: '50px 0 15px',
  };

  let beerBrand = {
    fontSize: '25px',
    margin: '0 0',
    padding: '0'
  };

  let content = {
    margin: '15px 0',
    fontSize: '20px'
  };

  let contentNumber = {
    fontSize: '25px'
  };

  let beerPrice = {
    fontSize: '30px'
  };

  return (
    <div>
      <div style={productsContainer}>
        <div style={leftColumn}>
          <img style={beerImage} src={beer6} />
        </div>
        <div style={rightColumn}>
          <h3 style={beerName}>{props.names}</h3>
          <h4 style={beerBrand}>Brand: {props.brand}</h4>
          <h4 style={content}>Alcohol Content: <span style={contentNumber}>{props.alcoholContent}</span></h4>
          {/* <h4 style={content}>Remaining Pints: <span style={contentNumber}>{props.pintsRemaining}</span></h4> */}
          <h4 style={content}>Price: <span style={beerPrice}>{props.price}</span></h4>
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


