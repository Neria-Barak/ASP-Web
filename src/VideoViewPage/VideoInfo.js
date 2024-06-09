import { useState } from "react";
import './VideoView.css';

function VideoInfo({video}) {
    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);

    return (
        <div>
            <span id='video-title'>{video.title}</span>
            <div id='interactive'>
                <span id='author'>{video.author}</span>
                <div id='like' onClick={() => {setLike(!like)}}>
                    {(like === false) ? (
                        <i className="bi bi-hand-thumbs-up fs-3" ></i>
                    ) : (
                        <i className="bi bi-hand-thumbs-up-fill fs-3" ></i>
                        )}
                </div>
                <div id='dislike' onClick={() => {setDislike(!dislike)}}>
                    {(dislike === false) ? (
                        <i className="bi bi-hand-thumbs-down fs-3" ></i>
                    ) : (
                        <i className="bi bi-hand-thumbs-down-fill fs-3" ></i>
                        )}
                </div>
                <div className='share'>
                    <i className="bi bi-box-arrow-up-right fs-3" ></i>
                    <span>Share</span>
                </div>
            </div>
            <span id='description'>{video.description}</span>
        </div>
    );
}

export default VideoInfo;