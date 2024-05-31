import VideoItem from "../VideoItem/VideoItem";

function VideoListResults({videos}) {

    const videoList = videos.map((video, key) => {
        return <VideoItem {...video} key={key}></VideoItem>
    });

    return(
        <div className="row">
            {videoList}
        </div>
    );
}

export default VideoListResults;