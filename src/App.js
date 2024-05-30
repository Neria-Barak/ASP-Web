import './App.css';
import LeftMenu from './LeftMenu/LeftMenu';
import videos from './VideoItem/videos';
import Search from './Search/Search';
import { useState } from 'react';
import VideoListResults from './VideoListResults/VideoListResults';

function App() {

    const [videoList, setVideoList] = useState(videos);
    const doSearch = function(q) {
        setVideoList(videos.filter((video) => video.title.includes(q)));
    }

    return (
        
        <div className="container-fluid">
            <div className="row">
                <LeftMenu/>
                <div className="col main-content">
                    <Search doSearch={doSearch}></Search>
                    <div className="row"></div>
                    <div className="row"></div>
                    <VideoListResults videos={videoList}/>
                </div>
                </div>
            </div>
    );
}

export default App;