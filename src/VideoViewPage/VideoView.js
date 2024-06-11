import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Search from '../MainPage/Search/Search';
import VideoList from './VideoList/VideoList'
import CommentSection from './CommentSection.js';
import VideoDetails from './VideoDetails.js';
import './VideoView.css';

function VideoView({videos, currentUser, toggleDarkMode, updateComments}) {
    const { id } = useParams();
    const [video, setVideo] = useState(null);

    useEffect(() => {
        const foundVideo = videos.find(vid => vid.id.toString() === id);
        setVideo(foundVideo);
    }, [id, videos]);


    console.log(videos);
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
                    <CommentSection comments={video.comments} updateComments={updateComments}/>
                </div>
                <div className='col-4' id="videos-scroll">
                    <VideoList videos={videos.filter(v => v.id !== video.id)}/>
                </div>
            </div>
        </div>
    );
}

export default VideoView;