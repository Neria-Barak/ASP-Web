import VideoItem from "../VideoItem/VideoItem";

function VideoListResults({videos, currentUser}) {

    const videoList = videos.map((video, key) => {
        return <VideoItem {...video} key={key} currentUser={currentUser}></VideoItem>
    });

    return(
        <div className="row">
            {videoList}
        </div>
    );
}

export default VideoListResults;