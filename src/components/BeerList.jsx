import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';
import Navbar from './Navbar';



function BeerList(props) {

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
    // gridArea: '2 / 4 / 3 / 10',
    textAlign: 'center',
    border: '30px solid #141819',
    color: 'white',
    fontSize: '20px',
    opacity: '0.8',
    borderRadius: '10px',
    padding: '0px'
  };



  return (
    <div>
      <Navbar />
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
            key={beer.id} />
        )}
        <style jsx>{`
          .example::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </div>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array
};


export default BeerList;