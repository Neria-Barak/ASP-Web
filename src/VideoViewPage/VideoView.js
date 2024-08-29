import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Search from '../MainPage/Search/Search';
import VideoList from './VideoList/VideoList'
import CommentSection from './CommentSection.js';
import VideoDetails from './VideoDetails.js';
import './VideoView.css';

function VideoView({videos, currentUser, toggleDarkMode}) {
    const { pid } = useParams();
    const [video, setVideo] = useState(null);

    useEffect(() => {
        const foundVideo = videos.find(vid => vid._id.toString() === pid);
    
        // Check if a video is found and create a new object reference
        if (foundVideo) {
            setVideo({ ...foundVideo });  // Create a shallow copy to ensure a new reference
        }
    }, [pid, videos]);

    if (!video) return (<div>Loading ...</div>);
    return (
        <div className='video-view-page'>
            <div className='row'>
                <Search doSearch={() => {}} currentUser={currentUser} toggleDarkMode={toggleDarkMode}></Search>
            </div>
            <div className='row video-view-left'>
                <div className='col-8 bg-transparent vh-100' id="video-section">
                    <video src={video.video} controls></video>
                    <VideoDetails video={video}/>
                    <CommentSection currentUser={currentUser} />
                </div>
                <div className='col-4' id="videos-scroll">
                    <VideoList currentVideoId={pid} currentUser={currentUser}/>
                </div>
            </div>
        </div>
    );
}

export default VideoView;