import React from 'react';
import PropTypes from 'prop-types';


function EmployeeAuthentication(props) {

  return (
    <div style={text}>
      <h2>Employee Sign In here</h2>
      <button onClick={props.onSubmitAuthentication}>Yes</button>
      <h6>Note: This may change at some point, but for now it makes sense.</h6>
    </div>
  );
}

EmployeeAuthentication.propTypes = {
  onSubmitAuthentication: PropTypes.func
};

export default EmployeeAuthentication;


let text = {
  color: 'red',
  textAlign: 'center',
  fontSize: '50px',
  marginTop: '200px'
};