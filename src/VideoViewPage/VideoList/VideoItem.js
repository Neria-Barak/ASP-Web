import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../axiosConfig';

const VideoListItem = ({ video, currentUser }) => {
    
    const navigate = useNavigate();

    let id = 0;
    if (currentUser) {
        id = currentUser._id;
    }
    const handleClick = async() => {
        navigate(`/watch/${video._id}`)
        window.location.reload();

        try {
            console.log(video._id);
            const response = await axios.post(`/videos/${video._id}/${id}`);

            if (response.status === 200) {
                console.log("added view successfully");
            }
        } catch (error) {
            console.log("user not logged in");
        }
    };

    return (
        <div className="video-list-item" onClick={handleClick}>
            <img src={video.img} alt={video.title} />
            <div className="video-info">
                <p id="title" className="card-text">{video.title}</p>
                <p className="card-text">{video.author}</p>
                <p className="card-text">{video.views} views.</p>
            </div>
        </div>
    );
};

export default VideoListItem;
