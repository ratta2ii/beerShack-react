import React from 'react';
import { Link } from 'react-router-dom';


function EmployeeNavbar() {

  var navContainer = {
    padding: '40px 15px',
    marginBottom: '200px'
  };

  var listElements = {
    float: 'left',
    fontSize: '35px',
    border: '4px solid lightgray',
    color: 'lightgray',
    padding: '10px',
    listStyleType: 'none',
    margin: '0px -2px'
  };

  var homeLink = {
    float: 'left',
    fontSize: '35px',
    border: '4px solid lightgray',
    color: 'lightgray',
    padding: '10px',
    listStyleType: 'none',
    marginRight: '-2px',
    marginLeft: '3%'
  };


  return (
    <div style={navContainer}>

      <ul>
        <Link to="/"><li style={homeLink} >Home</li></Link>
        <Link to="/products"><li style={listElements} >Products</li></Link>
        <Link to="/newbeer"><li style={listElements} >Add Beer</li></Link> 
        <Link to="/sign-out"><li style={listElements} >Sign Out</li></Link>
      </ul>

    </div>

  );
}


export default EmployeeNavbar;