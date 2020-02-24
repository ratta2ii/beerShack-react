import React from 'react';
import { Link } from 'react-router-dom';
import redTheme from '../assets/images/red.jpg';


function Home() {

  return (
    <div style={background}>
      <div>
        <h1 style={headerStyles}><span style={firstLetterB}>B</span>eer<span style={firstLetterS}>S</span>hack</h1>
        <p><Link to="/beerlist"><li style={entryLink} >Enter Here</li></Link></p>
      </div>
    </div>
  );
}

export default Home;


let background = {
  backgroundImage: `url(${redTheme})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  width: '100%',
  height: '100%',
  position: 'absolute'
};

let headerStyles = {
  fontSize: '160px',
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#ffda6a',
  margin: '200px 0 10px 0'
};

let entryLink = {
  textAlign: 'center',
  fontSize: '35px',
  textDecoration: 'none',
  listStyleType: 'none',
  color: '#ffda6a'
};

let firstLetterB = {
  fontSize: '300px',
  color: '#8d0a00'
};

let firstLetterS = {
  fontSize: '200px',
  color: '#8d0a00'
};

