// 'dumb' component
// this is kind of component which is used for simple presentation, usually contents a DOM markup and own styles
// can allow containment via {this.props.children}
// receives only props,
// has no dependecies across the app
// doesn't specify how data is loaded or mutated
// rarely has its own state















//
// example of component which takes in the "video" prop, and "onVideoSelect" callback function, passed in from its parent component and declared there as well
//
import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item" style={style}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;














//
// example of component which takes in the "video" prop only
//
import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
