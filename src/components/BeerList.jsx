import React from 'react';
import Beer from './Beer';

var masterBeerList = [
  {
    name: 'Blue Moon',
    brands: 'Molson Coors',
    alcoholContent: '3.2%',
    pintsRemaining: 124,
    price: '$7.00'
  },
  {
    name: 'Beer 2',
    brand: 'Molson Coors',
    alcoholContent: '3.2%',
    pintsRemaining: 124,
    price: '$7.00'
  },
  {
    name: 'Beer 3',
    brand: 'Molson Coors',
    alcoholContent: '3.2%',
    pintsRemaining: 124,
    price: '$7.00'
  },
  {
    name: 'Beer 4',
    brand: 'Molson Coors',
    alcoholContent: '3.2%',
    pintsRemaining: 124,
    price: '$7.00'
  },
  {
    name: 'Beer 5',
    brand: 'Molson Coors',
    alcoholContent: '3.2%',
    pintsRemaining: 124,
    price: '$7.00'
  },
  {
    name: 'Beer 6',
    brand: 'Molson Coors',
    alcoholContent: '3.2%',
    pintsRemaining: 124,
    price: '$7.00'
  }
];

function BeerList() {
  return (
    <div>
      {masterBeerList.map((beer, index) =>
        <Beer
          names={beer.name}
          location={beer.brand}
          alcoholContent={beer.alcoholContent}
          pintsRemaining={beer.pintsRemaining}
          price={beer.price} 
          key={index} />
      )}
    </div>
  );
}

export default BeerList;