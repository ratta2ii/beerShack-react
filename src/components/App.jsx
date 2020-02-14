import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Navbar from './Navbar';
import Header from './Header';
// import TicketList from './TicketList';
// import NewTicketForm from './NewTicketForm';
import Error404 from './Error404';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        {/* <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketForm} /> */}
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;