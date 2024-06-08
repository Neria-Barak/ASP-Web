import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Search from '../MainPage/Search/Search';

function VideoView({videos}) {
    const { id } = useParams();
    const [video, setVideo] = useState(null);

    useEffect(() => {
        const foundVideo = videos.find(vid => vid.id.toString() === id);
        setVideo(foundVideo);
    }, [id, videos]);

    if (!video) return (<div>Loading ...</div>);
    return (
        <div>
            <video src={video.video} controls></video>
        </div>
    );
}

export default VideoView;