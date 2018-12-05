import _ from 'lodash';
import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import VideoApi from './components/video_api/videoApi';
import Comment from './components/comments/comments';
import Weather from './components/weather/weather';



class App extends Component{
  constructor(props) {
    super(props);
    this.state= {
      showVideoApi: false,
      showComments: false,
      showWeather: false
  }
this.toggleVideoApi = this.toggleVideoApi.bind(this);
this.toggleComment = this.toggleComment.bind(this);
this.toggleWeather = this.toggleWeather.bind(this);

};
  render() {
    const {showVideoApi, showComments, showWeather} = this.state;
    const videoApiContainer = <VideoApi />;
    const commentContainer = <Comment />;
    const WeatherContainer = <Weather />;
    return(
      <div>
        <button onClick={this.toggleVideoApi}>Search a Video </button>
        <button onClick={this.toggleComment}>Show Comments</button>
        <button onClick={this.toggleWeather}>How is the Weather?</button>
        <div>{showVideoApi && videoApiContainer}</div>
        <div>{showComments && commentContainer}</div>
        <div>{showWeather && WeatherContainer}</div>
      </div>
    );
  }
 toggleVideoApi() {
    this.setState({showVideoApi: !this.state.showVideoApi});
  }
  toggleComment () {
    this.setState({showComments: !this.state.showComments});
  }
  toggleWeather () {
    this.setState({showWeather: !this.state.showWeather});
  }
}

//make an instance of APP and use it as a ReactDom (instance , insert the html from instance into this ! - mostly Container on index.html)
ReactDOM.render(<App />, document.querySelector('.container'));
