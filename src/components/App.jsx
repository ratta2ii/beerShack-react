import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
//import Header from './Header';
import Menu from './Menu';
// import NewTicketForm from './NewBeerForm';
import Error404 from './Error404';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Menu} />
        {/* <Route path='/newbeer' component={NewBeerForm} />  */}
        <Route component={Error404} />
      </Switch> 
    </div>
  );
}

export default App;