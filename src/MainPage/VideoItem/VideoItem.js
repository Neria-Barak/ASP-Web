import { useNavigate } from "react-router-dom";
import axios from '../../axiosConfig';

function VideoItem({title, author, views, time, img, _id, currentUser}) {
    const navigate = useNavigate();
    
    let id = 0;
    if (currentUser) {
        id = currentUser._id;
    }
    const goToVideo = async() => {
        navigate(`/watch/${_id}`)

        await new Promise(r => setTimeout(r, 500));

        window.location.reload();

        try {
            console.log(_id);
            const response = await axios.post(`/videos/${_id}/${id}`);

            if (response.status === 200) {
                console.log("added view successfully");
            }
        } catch (error) {
            console.log("user not logged in");
        }
    };
    return(
        <div id="video" onClick={goToVideo} className="card col-xl-2 col-lg-3 col-md-4 col-sm-6 border-0 p-1">
            <img src={img} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <p id="title" className="card-text">{title}</p>
                <p className="card-text">{author}</p>
                <p className="card-text">{views} views.</p>
            </div>
        </div>
    )
}

export default VideoItem;