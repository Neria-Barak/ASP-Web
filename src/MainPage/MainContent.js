import videos from './VideoItem/videos';
import Search from './Search/Search';
import { useState } from 'react';
import VideoListResults from './VideoListResults/VideoListResults';
import TagsBar from './Tags/TagsBar';

function MainContent({currentUser}) {

    const [videoList, setVideoList] = useState(videos.videos);
    const doSearch = function(q) {
        setVideoList(videos.videos.filter((video) => video.title.includes(q)));
    }

    return (
        <div id="right" className="col main-content">
            <Search doSearch={doSearch} currentUser={currentUser}></Search>
            <TagsBar></TagsBar>
            <VideoListResults videos={videoList}/>
        </div>
    );
}

export default MainContent;