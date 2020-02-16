import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import Header from './Header';
import Products from './Products';
import NewBeerForm from './NewBeerForm';
import Error404 from './Error404';
// import Navbar from './Navbar';



function App() {

  let background = {
    backgroundColor: 'black'
  };


  return (
    <div style={background}>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path='/products' component={Products} />
        <Route path='/newbeer' component={NewBeerForm} /> 
        <Route component={Error404} />
      </Switch>
    </div>
  );

}

export default App;