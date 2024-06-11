import React from 'react';
import { useNavigate } from 'react-router-dom';

const VideoListItem = ({ video }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/watch/${video.id}`)
    };

    return (
        <div className="video-list-item" onClick={handleClick}>
            <img src={video.img} alt={video.title} />
            <div className="video-info">
                <p id="title" className="card-text">{video.title}</p>
                <p className="card-text">{video.author}</p>
                <p className="card-text">{video.views} views. {video.time} ago</p>
            </div>
        </div>
    );
};

export default VideoListItem;
