import VideoListResults from './VideoListResults/VideoListResults';
import TagsBar from './Tags/TagsBar';

function MainContent({videoList, currentUser}) {

    return (
        <div id="right" className="col main-content">
            <TagsBar></TagsBar>
            <VideoListResults videos={videoList} currentUser={currentUser}/>
        </div>
    );
}

export default MainContent;