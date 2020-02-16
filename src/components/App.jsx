import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import NewBeerForm from './NewBeerForm';
import Error404 from './Error404';

function App() {

  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact ='/products' component={Products} />
        <Route path='/newbeer' component={NewBeerForm} /> 
        <Route component={Error404} />
      </Switch>
    </div>
  );

}

export default App;