import React from 'react';
import EmployeeAuthentication from './EmployeeAuthentication';
import PropTypes from 'prop-types';
import Admin from './Admin';


var alreadyAuthorized = false;

class AdminControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleDisplayForm = this.handleDisplayForm.bind(this);
  }

  handleDisplayForm() {
    this.setState({ formVisibleOnPage: true });
  }

  render() {

    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage || alreadyAuthorized === true) {
      currentlyVisibleContent = <Admin
        beerList={this.props.beerList}
        currentRouterPath={this.props.currentRouterPath}
        onBeerSelection={this.props.onBeerSelection}
      />;
    } else {
      currentlyVisibleContent = <EmployeeAuthentication
        onSubmitAuthentication={this.handleDisplayForm} />;
      alreadyAuthorized = true;
    }

    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

AdminControl.propTypes = {
  beerList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onBeerSelection: PropTypes.func
};

export default AdminControl;