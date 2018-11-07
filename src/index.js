import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
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
    this.state= {videos: [] //list of videos - object array}
  }
  YTSearch({key: API_KEY, term:'surfboard'}, (videos) => {
    //console.log(data); //configuration  option and callback function
    //this.setState({videos: data})
    this.setState({videos});
  });
}
  render() {
    return(
      <div>
      <SearchBar />
    <VideoList />
      </div>
    );
  }
}

//make an instance of APP and use it as a ReactDom (instance , insert the html from instance into this ! - mostly Container on index.html)
ReactDOM.render(<App />, document.querySelector('.container'));
