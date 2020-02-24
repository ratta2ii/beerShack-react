import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import redTheme from '../assets/images/red.jpg';
import Footer from './Footer';


function BeerList(props) {

  return (
    <div style={background}>
      <Navbar
        currentRouterPath={props.currentRouterPath} />
      <div style={title}>
        <h1>Specialty Beers</h1>
      </div>
      <div style={productContainer}>

        {props.beerList.map((beer) =>
          <Beer
            names={beer.names}
            brand={beer.brand}
            alcoholContent={beer.alcoholContent}
            pintsRemaining={beer.pintsRemaining}
            price={beer.price}
            key={beer.id}
            myKey={beer.id}
            currentRouterPath={props.currentRouterPath}
            onBeerSelection={props.onBeerSelection}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array,
  onBeerSelection: PropTypes.func,
  currentRouterPath: PropTypes.string
};


export default BeerList;


var background = {
  backgroundImage: `url(${redTheme})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  width: '100%',
  height: '100%',
  position: 'absolute',
  overflow: 'scroll',
  overflowX: 'hidden'
};

let productContainer = {
  width: '50%',
  margin: '0 auto',
  backgroundColor: '#ab1311',
  padding: '20px',
  webkitBoxhadow: '5px 5px 15px 9px rgb(15, 12, 12)',
  boxShadow: '5px 5px 15px 9px rgb(15, 12, 12)'
};

var title = {
  backgroundColor: 'black',
  width: '50%',
  margin: '0 auto 40px auto',
  textAlign: 'center',
  border: '30px solid #141819',
  color: '#ffc150',
  fontSize: '20px',
  opacity: '0.8',
  borderRadius: '10px',
  padding: '0px'
};