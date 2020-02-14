import React from 'react';
import PropTypes from 'prop-types';


function Beer(props) {

  let productsContainer = {
    width: '80%',
    margin: '10px auto',
    backgroundColor: 'wheat',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridColumnGap: '0px',
    gridRowGap: '0px'
  };

  let leftColumn = {
    gridArea: '1 / 1 / 2 / 2',
    padding: '68px'
  };

  let rightColumn = {
    gridArea: '1 / 2 / 2 / 3'
  };

  let beerImage = {
    height: '300px',
    width: '300px'
  };

  let beerName = {
    fontSize: '70px',
    padding: '0',
    margin: '68px 0 15px 0',
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
          <img style={beerImage} src={'https://source.unsplash.com/random/150×150/?beer'} />
        </div>
        <div style={rightColumn}>
          <h3 style={beerName}>{props.names}</h3>
          <h4 style={beerBrand}>Brand: {props.brand}</h4>
          <h4 style={content}>Alcohol Content: <span style={contentNumber}>{props.alcoholContent}</span></h4>
          <h4 style={content}>Remaining Pints: <span style={contentNumber}>{props.pintsRemaining}</span></h4>
          <h4 style={content}>Price: <span style={beerPrice}>{props.price}</span></h4>
        </div>
        <hr />
      </div>
    </div>
  );
}

Beer.propTypes = {
  names: PropTypes.string.isRequired,
  brand: PropTypes.string,
  alcoholContent: PropTypes.string,
  pintsRemaining: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired
};

export default Beer;



