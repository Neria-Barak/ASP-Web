import React from 'react';
import './VideoView.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VideoDetails = ({ video }) => {
    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);

    const navigate = useNavigate();
    const edit = () => {
        navigate(`/edit/${video.id}`)
    }

  return (
    <div className="video-details">
      <div className="video-info">
        <h1 className="video-title">{video.title}</h1>
        <p className="video-author">by {video.author}</p>
        <p className="video-description">{video.description}</p>
      </div>
      <div className="video-actions">
        <div>
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
        </div>
        <div className='share' data-toggle="modal" data-target="#share-modal">
            <i className="bi bi-box-arrow-up-right fs-3" ></i>
            <span>Share</span>
        </div>
        <div className="modal fade" id="share-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Share</h5>
                    </div>
                    <div className="modal-body">
                        <div>Copy link: https://youtube/a-link-that-shouldnt-work</div>
                        <div className='share-options'>
                            <i className="bi bi-whatsapp fs-3" ></i>
                            <i className="bi bi-envelope fs-3" ></i>
                            <i className="bi bi-facebook fs-3" ></i>
                            <i className="bi bi-messenger fs-3" ></i>
                            <i className="bi bi-twitter-x fs-3" ></i>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='share' onClick={edit}>
            <i className="bi bi-pencil-square fs-3" ></i>
            <span>Edit</span>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
