import _ from 'lodash';
import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//react is a library --> the rest need file reference
import YTSearch from 'youtube-api-search';
const API_KEY='AIzaSyD6qwYV0SWWoeE_rw30JCRQHtIfH0BM4h8';

//create a new component
/* Old js syntax
const App = function(){
  return <div>Hi!</div>;
}
*/
//new ES6 syntax
class App extends Component{
  constructor(props) {
    super(props);
    this.state= {
      videos:[],
      selectedVideo:null
  }
this.videoSearch('surfboard');
};

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      });
    });
}
  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);
    return(
      <div>
      <SearchBar onSearchTermChange={videoSearch}/>
    <VideoDetail video={this.state.selectedVideo}/>
    <VideoList videos={this.state.videos}   onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
      </div>
    );
  }
}

//make an instance of APP and use it as a ReactDom (instance , insert the html from instance into this ! - mostly Container on index.html)
ReactDOM.render(<App />, document.querySelector('.container'));
