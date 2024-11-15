import LeftMenuIcon from "./LeftMenuIcon";
import { useNavigate } from "react-router-dom"; 

function LeftMenu() {

    const navigate = useNavigate();
    const navigateToAddVid = () => {
        navigate('/addvideo');
    }

    return (
        <>
            <div id="left" className="col-2 bg-transparent vh-100">
                <ul className="list-group">
                    <li className="list-group-item">
                        <ul className="list-group">
                            <LeftMenuIcon text={"Home"} icon={"house-fill"}/>
                            <LeftMenuIcon text={"Explore"} icon={"search"}/>
                            <LeftMenuIcon text={"Shorts"} icon={"shop"}/>
                            <LeftMenuIcon text={"Subscriptions"} icon={"collection-play"}/>
                        </ul>
                    </li>
                    <li className="list-group-item">
                        <ul className="list-group">
                            <div className="add-video-btn" onClick={navigateToAddVid}>
                                <LeftMenuIcon text={"Add Video"} icon={"plus-circle"}/>
                            </div>
                            <LeftMenuIcon text={"Your channel"} icon={"person-square"}/>
                            <LeftMenuIcon text={"History"} icon={"clock"}/>
                            <LeftMenuIcon text={"Playlists"} icon={"list"}/>
                            <LeftMenuIcon text={"Your videos"} icon={"caret-right-square"}/>
                            <LeftMenuIcon text={"Watch later"} icon={"clock-history"}/>
                            <LeftMenuIcon text={"Liked videos"} icon={"hand-thumbs-up"}/>
                        </ul>
                    </li>
                    <li className="list-group-item">
                        <ul className="list-group">
                            <LeftMenuIcon text={"Trending"} icon={"fire"}/>
                            <LeftMenuIcon text={"Music"} icon={"music-note"}/>
                            <LeftMenuIcon text={"Gaming"} icon={"controller"}/>
                            <LeftMenuIcon text={"News"} icon={"newspaper"}/>
                            <LeftMenuIcon text={"Sports"} icon={"trophy"}/>
                            <LeftMenuIcon text={"Podcasts"} icon={"broadcast-pin"}/>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default LeftMenu;