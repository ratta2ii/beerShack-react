import React from 'react';
import PropTypes from 'prop-types';
import beer3 from '../assets/images/beer3.png';


function Beer(props) {

  if (props.currentRouterPath === '/admin') {
    return (
      <div>
        <div style={productsContainer}>
          <div style={leftColumn}>
            <img style={beerImage} src={beer3} />
          </div>

          <div style={centerColumn}>
            <h3 style={beerName}>{props.names}</h3>
            <h4 style={beerBrand}>Brand: {props.brand}</h4>
            <h4 style={content}>Alcohol Content: <span style={contentNumber}>{props.alcoholContent}</span></h4>
            <h4 style={content}>Remaining Pints: <span style={contentNumber}>{props.pintsRemaining}</span></h4>
            <h4 style={beerPrice}>Price: <span style={beerDollars}>$ {props.price}</span></h4>
          </div>

          <div style={rightColumn}>
            <button style={submitButton} type='button' onClick={() => {
              props.onBeerSelection({
                names: props.names,
                brand: props.brand,
                alcoholContent: props.alcoholContent,
                price: props.price,
                myKey: props.myKey,
                pintsRemaining: props.pintsRemaining
              });
            }}>Order</button>
          </div>
        </div>
      </div>

    );
  } else {
    return (
      <div>
        <div style={productsContainer}>
          <div style={leftColumn}>
            <img style={beerImage} src={beer3} />
          </div>

          <div style={centerColumn}>
            <h3 style={beerName}>{props.names}</h3>
            <h4 style={beerBrand}>Brand: {props.brand}</h4>
            <h4 style={content}>Alcohol Content: <span style={contentNumber}>{props.alcoholContent}</span></h4>
            <h4 style={content}>Remaining Pints: <span style={contentNumber}>{props.pintsRemaining}</span></h4>
            <h4 style={beerPrice}>Price: <span style={beerDollars}>$ {props.price}</span></h4>
          </div>
        </div>
      </div>
    );
  }
}

Beer.propTypes = {
  names: PropTypes.string,
  brand: PropTypes.string,
  alcoholContent: PropTypes.string,
  price: PropTypes.string,
  myKey: PropTypes.string,
  pintsRemaining: PropTypes.string,
  currentRouterPath: PropTypes.string,
  onBeerSelection: PropTypes.func
};


export default Beer;






let productsContainer = {
  width: '90%',
  margin: '0 auto 35px auto',
  backgroundColor: 'white',
  display: 'grid',
  // gridTemplateColumns: '150px 2fr',
  gridTemplateColumns: '25% 1fr 1fr',
  border: '40px solid rgb(255, 193, 80)',
  borderRadius: '5px 60px 5px'
  // webkitBoxhadow: '5px 5px 15px 9px rgb(15, 12, 12)',
  // boxShadow: '5px 5px 15px 9px rgb(15, 12, 12)'
};

let leftColumn = {
  gridArea: '1 / 1 / 2 / 2',
  padding: '35px 0 20px 60px',
  zIndex: '1'
};

let centerColumn = {
  gridArea: '1 / 2 / 2 / 3',
  marginLeft: '0px'
};

let rightColumn = {
  gridArea: '1 / 3 / 2 / 4'
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

let submitButton = {
  margin: '27% 0 25% 15%',
  fontSize: '35px',
  backgroundColor: 'rgb(106, 175, 202)',
  borderRadius: '50%',
  padding: '20px',
  border: '2px solid gray',
  float: 'left',
  color: '#802020',
  height: '125px',
  width: '125px',
};







// function Beer(props) {

//   const beerInformation =
//     <div>
//       <div style={productsContainer}>
//         <div style={leftColumn}>
//           <img style={beerImage} src={beer3} />
//         </div>
//         <div style={centerColumn}>
//           <h3 style={beerName}>{props.names}</h3>
//           <h4 style={beerBrand}>Brand: {props.brand}</h4>
//           <h4 style={content}>Alcohol Content: <span style={contentNumber}>{props.alcoholContent}</span></h4>
//           <h4 style={content}>Remaining Pints: <span style={contentNumber}>{props.pintsRemaining}</span></h4>
//           <h4 style={beerPrice}>Price: <span style={beerDollars}>{props.price}</span></h4>
//         </div>
//       </div>
//     </div>;
//   if (props.currentRouterPath === '/admin') {
//     return (
//       <div onClick={() => {
//         props.onBeerSelection({
//           names: props.names,
//           brand: props.brand,
//           alcoholContent: props.alcoholContent,
//           price: props.price,
//           pintsRemaining: props.pintsRemaining
//         });
//       }}>
//         {beerInformation}
//       </div>
//     );
//   } else {
//     return (
//       {beerInformation}
//     );
//   }
// }

// Beer.propTypes = {
//   names: PropTypes.string,
//   brand: PropTypes.string,
//   alcoholContent: PropTypes.string,
//   price: PropTypes.string,
//   pintsRemaining: PropTypes.string,
//   currentRouterPath: PropTypes.string,
//   onBeerSelection: PropTypes.func
// };


// export default Beer;







// <div onClick={() => {
//   props.onBeerSelection({
//     names: props.names,
//     brand: props.brand,
//     alcoholContent: props.alcoholContent,
//     price: props.price,
//     pintsRemaining: props.pintsRemaining
//   });
// }}>




