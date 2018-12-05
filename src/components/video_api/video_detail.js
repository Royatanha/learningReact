import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {  Container, Row, Col } from 'reactstrap';

const VideoDetail = ({video}) => {
 if(!video) {
    return <div>loading</div>;
  }
  else {
    const videoId= video.id.videoId;
    const url= `https://www.youtube.com/embed/${videoId}`;
    return(
      <div className="video-item">
        <div>
          <iframe className="embed-responsive-item" src={url} width="100%" height="auto"></iframe>
        </div>
        <div className="details">
          <h5>{video.snippet.title}</h5>
          <div>{video.snippet.description}</div>
        </div>
        </div>
    );
  }
};
export default VideoDetail;
