import { useNavigate } from "react-router-dom";

function VideoItem({title, author, views, time, img, id}) {
    const navigate = useNavigate();
    
    const goToVideo = () => {
        navigate(`/watch/${id}`)
    };
    return(
        <div id="video" onClick={goToVideo} className="card col-xl-2 col-lg-3 col-md-4 col-sm-6 border-0 p-1">
            <img src={img} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <p id="title" className="card-text">{title}</p>
                <p className="card-text">{author}</p>
                <p className="card-text">{views} views. {time} ago</p>
            </div>
        </div>
    )
}

export default VideoItem;