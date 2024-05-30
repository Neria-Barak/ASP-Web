import './App.css';
import LeftMenu from './LeftMenu/LeftMenu';
import videos from './VideoItem/videos';
import Search from './Search/Search';
import { useState } from 'react';
import VideoListResults from './VideoListResults/VideoListResults';
import TagsBar from './Tags/TagsBar';

function App() {

    const [videoList, setVideoList] = useState(videos);
    const doSearch = function(q) {
        setVideoList(videos.filter((video) => video.title.includes(q)));
    }

    return (
        
        <div className="container-fluid">
            <div className="row">
                <LeftMenu/>
                <div id="right" className="col main-content">
                    <Search doSearch={doSearch}></Search>
                    <TagsBar></TagsBar>
                    <VideoListResults videos={videoList}/>
                </div>
                </div>
            </div>
    );
}

export default App;