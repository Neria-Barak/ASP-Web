import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Search from '../MainPage/Search/Search';
import VideoInfo from './VideoInfo.js';
import './VideoView.css';

function VideoView({videos, currentUser, toggleDarkMode}) {
    const { id } = useParams();
    const [video, setVideo] = useState(null);

    useEffect(() => {
        const foundVideo = videos.find(vid => vid.id.toString() === id);
        setVideo(foundVideo);
    }, [id, videos]);

    if (!video) return (<div>Loading ...</div>);
    return (
        <div>
            <div className='row'>
                <Search doSearch={() => {}} currentUser={currentUser} toggleDarkMode={toggleDarkMode}></Search>
            </div>
            <div className='row video-view-left'>
                <div className='col-8 bg-transparent vh-100' id="video-section">
                    <video src={video.video} controls></video>
                    <VideoInfo video={video}/>
                </div>
                <div className='col-4' id="videos-scroll">
                    <span>hello</span>
                </div>
            </div>
        </div>
    );
}

export default VideoView;