import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './season_display';

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

  render() {
    const {lat,errorMessage} = this.state;
    if(errorMessage && !lat) {
      return( <div> Error: {errorMessage}</div>);
    }
    if(!errorMessage && lat) {
      return(
        <SeasonDisplay latitude= {lat} />
      );
    }
return <div>Loading!</div>
  }
};
export default Weather;
