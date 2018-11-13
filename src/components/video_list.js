import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
const videoItems =  props.videos.map((video) => {
    return <VideoListItem
      video= {video}
      key={video.etag}
      onVideoSelect={props.onVideoSelect}
    />
  });
  return (
<ListGroup>
{videoItems}
</ListGroup>
  );
};

export default VideoList;
