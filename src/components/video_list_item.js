//making video list from video Component*/
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { ListGroup, ListGroupItem, Media} from 'reactstrap';

const VideoListItem = ({video, onVideoSelect}) => {
  //const video = props.video;
  //console.log(video);
  const imageUrl= video.snippet.thumbnails.default.url;
  console.log(imageUrl);
  return (
    <ListGroupItem onClick={()=> onVideoSelect(video)} className="list-group-item">
    <Media list className="video-list">
        <Media left>
            <Media object src={imageUrl} />
            </Media>
      <Media body>
        <Media heading>{video.snippet.title}</Media>
        </Media>
        </Media>
    </ListGroupItem>
  )};
export default VideoListItem;
