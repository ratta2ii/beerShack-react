import React from 'react';
import { Link } from 'react-router-dom';


function Navbar(props) {

  if (props.currentRouterPath === '/admin') {
    return (
      <div style={navContainer}>
        <ul>
          <Link to="/"><li style={homeLink} >Home</li></Link>
          <Link to="/beerlist"><li style={listElements} >Products</li></Link>
          <Link to="/newbeer"><li style={listElements} >Add Beer</li></Link>
          <Link to="/admin"><li style={listElements} >Admin</li></Link>
        </ul>
      </div>

    );
  } else {
    return (
      <div style={navContainer}>
        <ul>
          <Link to="/"><li style={homeLink} >Home</li></Link>
          <Link to="/beerlist"><li style={listElements} >Products</li></Link>
          <Link to="/"><li style={listElements} >FAQ</li></Link>
          <Link to="/admin"><li style={listElements} >Admin</li></Link>
        </ul>
      </div>
    );
  }
}

export default Navbar;



var navContainer = {
  padding: '30px 0px',
  marginBottom: '100px'
};

var listElements = {
  float: 'left',
  fontSize: '20px',
  border: '3px solid #ffc150',
  color: 'lightgray',
  padding: '10px',
  listStyleType: 'none',
  margin: '0px -2px'
};

var homeLink = {
  float: 'left',
  fontSize: '20px',
  border: '3px solid #ffc150',
  color: 'lightgray',
  padding: '10px',
  listStyleType: 'none',
  marginRight: '-2px',
  marginLeft: '3%'
};