import React from 'react';

export default function FormBox() {

  var formContainer = {
    backgroundColor: 'white',
    width: '400px',
    margin: '100px auto',
    height: '500px',
    borderRadius: '3px'
  };

  var pairNames = {
    border: '2px solid gray',
    width: '350px',
    height: '30px',
    margin: '20px',
    borderRadius: '3px'
  };

  var locationInput = {
    border: '2px solid gray',
    width: '350px',
    height: '30px',
    margin: '20px',
    borderRadius: '3px'
  };

  var issueInput = {
    border: '2px solid gray',
    width: '350px',
    height: '200px',
    margin: '20px'
  };

  var submitButton = {
    margin: '30px 0 50px 40%',
    fontSize: '25px',
    backgroundColor: 'lightgray',
    borderRadius: '5px',
    padding: '2px 10px'
  };


  return (
    <div style={formContainer}>
      <form>


        <input style={pairNames}
          type='text'
          id='names'
          placeholder='Pair Names' />


        <input style={locationInput}
          type='text'
          id='location'
          placeholder='Location' />



        <textarea style={issueInput}
          id='issue'
          placeholder='Describe your issue.' />


        <div  >
          <button style={submitButton} type='submit'>Add Beer</button>
        </div>

      </form>
    </div>
  );
}