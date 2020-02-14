// import React from 'react';
// import PropTypes from 'prop-types';


// function Beer(props) {
//   return (
//     <div>
//       <h3>{props.name}</h3>  
//       <h4>{props.brand}</h4>
//       <h5><span>{props.alcoholContent}</span></h5>
//       <h5>{props.pintsRemaining}</h5>
//       <p>{props.price}</p>
//       <hr />
//     </div>
//   );
// }

// Beer.propTypes = {
//   name: PropTypes.string.isRequired,
//   brand: PropTypes.string,
//   alcoholContent: PropTypes.string,
//   pintsRemaining: PropTypes.number.isRequired,
//   price: PropTypes.price.string.isRequired
// };

// export default Beer;

import React from 'react';
import PropTypes from 'prop-types';

function Beer(props) {
  return (
    <div>
      <h3>{props.names} - {props.brands}</h3>
      <p><em>{props.alcoholContent}</em></p>
      <hr />
    </div>
  );
}

Beer.propTypes = {
  names: PropTypes.string,
  brands: PropTypes.string,
  alcoholContent: PropTypes.string
};

export default Beer;

