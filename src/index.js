import _ from 'lodash';
import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import VideoApi from './components/video_api/videoApi';

//react is a library --> the rest need file reference
import YTSearch from 'youtube-api-search';
const API_KEY='AIzaSyD6qwYV0SWWoeE_rw30JCRQHtIfH0BM4h8';


class App extends Component{
  constructor(props) {
    super(props);
    this.state= {
showVideoApi: false
  }
this.handleVideoApi = this.handleVideoApi.bind(this);

};
  render() {
    const videoApiContainer = <VideoApi />;
    return(
      <div>
        <button onClick={this.handleVideoApi}>Search a Video </button>
        <div>{this.state.showVideoApi && videoApiContainer}</div>
      </div>
    );
  }
 handleVideoApi() {
    this.setState({showVideoApi: !this.state.showVideoApi});
  }
}

//make an instance of APP and use it as a ReactDom (instance , insert the html from instance into this ! - mostly Container on index.html)
ReactDOM.render(<App />, document.querySelector('.container'));
