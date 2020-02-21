import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';


let formContainer = {
  backgroundColor: 'white',
  width: '300px',
  margin: '0 auto',
  height: '400px',
  borderRadius: '3px',
  padding: '20px 40px 40px 40px',
  border: '50px solid #ffc150',
  webkitBoxhadow: '5px 5px 15px 9px rgb(15, 12, 12)',
  boxShadow: '5px 5px 15px 9px rgb(15, 12, 12)'
};

let inputField = {
  border: '2px solid #dda832',
  width: '94%',
  height: '30px',
  margin: '0 0 25px 0',
  borderRadius: '5px',
  fontSize: '20px',
  padding: '0 10px'
};

let submitButton = {
  margin: '10px 0 20px 30%',
  fontSize: '23px',
  backgroundColor: 'rgb(203, 213, 217)',
  borderRadius: '3px',
  padding: '4px 14px',
  border: '2px solid gray'
};

let formLabel = {
  fontSize: '20px',
  margin: '0 0 7px 0'
};


function NewBeerForm(props) {

  let _names = null;
  let _brand = null;
  let _alcoholContent = null;
  let _price = null;

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    props.onSubmitAddNewBeer({ names: _names.value, brand: _brand.value, alcoholContent: _alcoholContent.value, price: _price.value });
    _names.value = '';
    _brand.value = '';
    _alcoholContent.value = '';
    _price.value = '';
  }

  return (
    <div>
      <Navbar />
      <div style={formContainer}>
        <form onSubmit={handleNewBeerFormSubmission}>

          <p style={formLabel}>Beer Name</p>
          <input style={inputField}
            type='text'
            id='names'
            // placeholder='Enter Beer Name'
            ref={(input) => { _names = input; }} />

          <p style={formLabel}>Beer Brand</p>
          <input style={inputField}
            type='text'
            id='brand'
            ref={(input) => { _brand = input; }} />

          <p style={formLabel}>Alcohol Content</p>
          <input style={inputField}
            type='text'
            id='alcoholContent'
            // placeholder='Enter Alcohol Content'
            ref={(input) => { _alcoholContent = input; }} />

          <p style={formLabel}>Beer Price</p>
          <input style={inputField}
            type='text'
            id='price'
            // placeholder='Enter Price'
            ref={(input) => { _price = input; }} />

          <div>
            <button style={submitButton} type='submit'>Add Beer</button>
          </div>
        </form>
      </div>
    </div>
  );
}


NewBeerForm.propTypes = {
  onSubmitAddNewBeer: PropTypes.func
};


export default NewBeerForm;

