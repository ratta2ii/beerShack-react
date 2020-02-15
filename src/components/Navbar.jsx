import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {

  var navContainer = {
    padding: '40px 15px',
    marginBottom: '50px'
  };

  var unorderedList = {
    marginLeft: '90%'
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

  return (
    <div style={navContainer}>
      <ul stlye={unorderedList}>
        <Link to="/"><li style={listElements} >Home</li></Link>
        <Link to="/newticket"><li style={listElements} >Products</li></Link>
        <Link to="/test"><li style={listElements} >Sign In</li></Link>
        <Link to="/test"><li style={listElements} >FAQ</li></Link>
      </ul>
      <br />
    </div>
  );
}