import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
  var navContainer = {
    padding: '10px',
    marginBottom: '30px'
  };

  var listElements = {
    float: 'left',
    fontSize: '20px',
    border: '2px solid gray',
    color: 'gray',
    padding: '6px',
    listStyleType: 'none',
    margin: '0px -1px'
  };

  return (
    <div style={navContainer}>
      <ul>
        <Link to="/"><li style={listElements} >Home</li></Link>
        <Link to="/newticket"><li style={listElements} >Products</li></Link>
        <Link to="/test"><li style={listElements} >Sign In</li></Link>
        <Link to="/test"><li style={listElements} >FAQ</li></Link>
      </ul>
      <br />
    </div>
  );
}