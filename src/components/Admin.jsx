import React from 'react';
import PropTypes from 'prop-types';
import BeerList from './BeerList';


function Admin(props) {

  let admin = {
    position: 'fixed',
    top: '10px',
    right: '50px',
    zIndex: '5',
    color: '#ffc150',
    size: '25px'
  };

  return (
    <div>
      <p style={admin}>Employees Only</p>
      <BeerList
        beerList={props.beerList}
        currentRouterPath={props.currentRouterPath}
        onBeerSelection={props.onBeerSelection}
      />
    </div>
  );
}

Admin.propTypes = {
  beerList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onBeerSelection: PropTypes.func
};

export default Admin;