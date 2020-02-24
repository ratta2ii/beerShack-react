import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import BeerList from './BeerList';
import NewBeerForm from './NewBeerForm';
import Error404 from './Error404';
import AdminControl from './AdminControl';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterBeerList: [],
      selectedBeer: null
    };
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this);
    this.handleChangingSelectedBeer = this.handleChangingSelectedBeer.bind(this);
  }

  handleChangingSelectedBeer(beer) {
    var newMasterBeerList = this.state.masterBeerList;
    newMasterBeerList.forEach(element => {
      if (element.id === beer.myKey) {
        var remaining = parseInt(element.pintsRemaining);
        remaining--;
        remaining += '';
        element.pintsRemaining = remaining;
        this.setState({ masterBeerList: newMasterBeerList });
      }
    });
    return false;
  }

  handleAddingNewBeerToList(newBeer) {
    var newMasterBeerList = this.state.masterBeerList.slice();
    newMasterBeerList.push(newBeer);
    this.setState({ masterBeerList: newMasterBeerList });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />

          <Route path='/beerlist' render={() => <BeerList
            beerList={this.state.masterBeerList} />} />

          <Route path='/newbeer' render={() => <NewBeerForm
            onSubmitAddNewBeer={this.handleAddingNewBeerToList} />} />

          <Route path='/admin' render={(props) => <AdminControl
            beerList={this.state.masterBeerList}
            currentRouterPath={props.location.pathname}
            onBeerSelection={this.handleChangingSelectedBeer}
            selectedBeer={this.state.selectedBeer} />} />

          <Route component={Error404} />
        </Switch>

        <style global jsx>{`
          button:focus {
            outline: 0;
          }
      
          a:link {
            text-decoration: none;
          }
      
          button:hover {
            cursor: pointer;
          }
      
          button:active {
            outline: none;
            border: none;
          }
        `}</style>
      </div>
    );

  }
}

export default App;
