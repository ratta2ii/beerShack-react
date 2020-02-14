import React from 'react';
import Beer from './Beer';

var masterBeerList = [
  {
    names: 'Blue Moon',
    brand: 'Molson Coors',
    alcoholContent: '3.2%',
    pintsRemaining: 124,
    price: '$7.00',
    imageUrl: '"https://source.unsplash.com/random/200×200/?beer"'
  },
  {
    names: 'Beer 2',
    brand: 'Molson Coors',
    alcoholContent: '3.2%',
    pintsRemaining: 124,
    price: '$7.00'
  },
  {
    names: 'Beer 3',
    brand: 'Molson Coors',
    alcoholContent: '3.2%',
    pintsRemaining: 124,
    price: '$7.00',
    imageUrl: '"https://source.unsplash.com/random/300×300/?beer"'
  },
  {
    names: 'Beer 4',
    brand: 'Molson Coors',
    alcoholContent: '3.2%',
    pintsRemaining: 124,
    price: '$7.00',
    imageUrl: '"https://source.unsplash.com/random/400×400/?beer"'
  },
  {
    names: 'Beer 5',
    brand: 'Molson Coors',
    alcoholContent: '3.2%',
    pintsRemaining: 124,
    price: '$7.00',
    imageUrl: '"https://source.unsplash.com/random/100×100/?beer"'
  },
  {
    names: 'Beer 6',
    brand: 'Molson Coors',
    alcoholContent: '3.2%',
    pintsRemaining: 124,
    price: '$7.00',
    imageUrl: '"https://source.unsplash.com/random/350×350/?beer"'
  }
];

function BeerList() {
  return (
    <div>
      {masterBeerList.map((beer, index) =>
        <Beer
          names={beer.names}
          brand={beer.brand}
          alcoholContent={beer.alcoholContent}
          pintsRemaining={beer.pintsRemaining}
          price={beer.price} 
          key={index} />
      )}
    </div>
  );
}

export default BeerList;