import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
//import Header from './Header';
import BeerList from './BeerList';
// import NewTicketForm from './NewBeerForm';
import Error404 from './Error404';


function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={BeerList} />
        {/* <Route path='/newbeer' component={NewBeerForm} />  */}
        <Route component={Error404} />
      </Switch> 
    </div>
  );
}

export default App;