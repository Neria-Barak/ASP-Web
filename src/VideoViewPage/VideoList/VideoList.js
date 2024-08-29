import React, { useState, useEffect } from 'react';
import VideoListItem from './VideoItem';
import axios from '../../axiosConfig';

const VideoList = ({currentVideoId, currentUser}) => {
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`/videos/${currentVideoId}/recom`);
        // const response = await axios.get(`/videos`);
        if (response.status === 200) {
          console.log(response.data);
          setRelatedVideos(response.data);
         
        }
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [currentVideoId]); 
  console.log("these videos", relatedVideos);
  const videoList = relatedVideos.filter(video => video._id !== currentVideoId);
  return (
    <div className="video-list">
      <h2>Related Videos</h2>
      {videoList.map(video => (
        <VideoListItem key={video._id} video={video} currentUser={currentUser}/>
      ))}
    </div>
  );
};

export default VideoList;
