import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import BeerList from './BeerList';
import NewBeerControl from './NewBeerControl';
import Error404 from './Error404';
// import redTheme from '../assets/images/red.jpg';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterBeerList: []
    };
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this);
  }

  // handleRemovingOneBeerFromKeg(beerObject) {
  //   var beerCount = beerObject.pintsRemaining;
  //   var newCount = beerCount - 1;

  // }

  handleAddingNewBeerToList(newBeer) {
    console.log('I am inside handleAddingNewBeerToList' + newBeer.name);
    var newMasterBeerList = this.state.masterBeerList.slice();
    newMasterBeerList.push(newBeer);
    console.log(newMasterBeerList);
    this.setState({ masterBeerList: newMasterBeerList });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />

          <Route path='/beerlist' render={() => <BeerList
            beerList={this.state.masterBeerList} />} />

          <Route path='/newbeer' render={() => <NewBeerControl
            onSubmitAddNewBeer={this.handleAddingNewBeerToList} />} />

          <Route component={Error404} />
        </Switch>

        {/* <style global jsx>{`
          body {
            background: url('${redTheme}');
            background-repeat: no-repeat;
            position: fixed;
            top: 0px;
            left: 0px;
            background-size: cover;

          }
        `}</style> */}
      </div>
    );

  }
}



export default App;
