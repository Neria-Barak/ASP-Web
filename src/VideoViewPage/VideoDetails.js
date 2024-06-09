import React from 'react';
import './VideoView.css';
import { useState } from 'react';

const VideoDetails = ({ video }) => {
    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);

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
        <div className='share' data-toggle="modal" data-target="#exampleModal">
            <i className="bi bi-box-arrow-up-right fs-3" ></i>
            <span>Share</span>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Share</h5>
                    </div>
                    <div class="modal-body">
                        <div>Copy link: https://youtube/a-link-that-shouldnt-work</div>
                        <div className='share-options'>
                            <i className="bi bi-whatsapp fs-3" ></i>
                            <i className="bi bi-envelope fs-3" ></i>
                            <i className="bi bi-facebook fs-3" ></i>
                            <i className="bi bi-messenger fs-3" ></i>
                            <i className="bi bi-twitter-x fs-3" ></i>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
