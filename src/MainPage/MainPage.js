import './MainPage.css';
import LeftMenu from './LeftMenu/LeftMenu';
import videos from './VideoItem/videos';
import Search from './Search/Search';
import { useState } from 'react';
import VideoListResults from './VideoListResults/VideoListResults';
import TagsBar from './Tags/TagsBar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import ShrinkedLeftMenu from './LeftMenu/ShrinkedLeftMenu';

function MainPage() {

    const [videoList, setVideoList] = useState(videos.videos);
    const doSearch = function(q) {
        setVideoList(videos.videos.filter((video) => video.title.includes(q)));
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LeftMenu/>}></Route>
                        <Route path="/no-menu" element={<ShrinkedLeftMenu/>}></Route>
                    </Routes>
                    <div id="right" className="col main-content">
                        <Search doSearch={doSearch}></Search>
                        <TagsBar></TagsBar>
                        <VideoListResults videos={videoList}/>
                    </div>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default MainPage;