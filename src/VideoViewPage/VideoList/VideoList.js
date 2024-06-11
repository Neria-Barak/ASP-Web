import React from 'react';
import VideoListItem from './VideoItem';

const VideoList = ({videos}) => {

  return (
    <div className="video-list">
      <h2>Related Videos</h2>
      {videos.map(video => (
        <VideoListItem key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoList;
