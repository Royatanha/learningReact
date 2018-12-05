import _ from 'lodash';
import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import YTSearch from 'youtube-api-search';
const API_KEY='AIzaSyD6qwYV0SWWoeE_rw30JCRQHtIfH0BM4h8';

class VideoApi extends Component {
  constructor(props) {
    super(props);
    this.state= {
      videos:[],
      selectedVideo:null
  }
this.videoSearch('surfboard');
};

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
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      });
    });
}
}

export default VideoApi;
