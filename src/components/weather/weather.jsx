import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './season_display';
import Spinner from '../common/spinner';

class Weather extends Component {
  /*
  constructor(props) {
    super(props);
    this.state ={
      lat: null,
      errorMessage: ''
    };
  }
  */
state = {lat: null, errorMessage: ''}

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({lat:position.coords.latitude})
      },
      err => {this.setState({errorMessage: 'User denied Geolocation '})}
    );
  }

  componentDidUpdate() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({lat:position.coords.latitude})
      },
      err => {this.setState({errorMessage: 'User denied Geolocation '})}
    );
  }
renderContent() {
  const {lat,errorMessage} = this.state;
  if(errorMessage && !lat) {
    return( <div> Error: {errorMessage}</div>);
  }
  if(!errorMessage && lat) {
    return(
      <SeasonDisplay latitude= {lat} />
    );
  }
return <Spinner message="Please accept location Request" />;
}
  render() {
    return <div>{this.renderContent()}</div>
  }
};
export default Weather;
