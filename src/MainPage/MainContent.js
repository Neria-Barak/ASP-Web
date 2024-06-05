import VideoListResults from './VideoListResults/VideoListResults';
import TagsBar from './Tags/TagsBar';

function MainContent({videoList}) {

    return (
        <div id="right" className="col main-content">
            <TagsBar></TagsBar>
            <VideoListResults videos={videoList}/>
        </div>
    );
}

export default MainContent;