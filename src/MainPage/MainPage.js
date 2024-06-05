import './MainPage.css';
import LeftMenu from './LeftMenu/LeftMenu';
import MainContent from './MainContent';
import videos from './VideoItem/videos';
import Search from './Search/Search';
import { useState } from 'react';

function MainPage({currentUser, toggleDarkMode}) {

    const [videoList, setVideoList] = useState(videos.videos);
    const doSearch = function(q) {
        setVideoList(videos.videos.filter((video) => video.title.includes(q)));
    }

    return (
        <div className="container-fluid" id='main-page'>
            <div className='row'>
                <Search doSearch={doSearch} currentUser={currentUser} toggleDarkMode={toggleDarkMode}></Search>
            </div>
            <div className="row" id="center">
                <LeftMenu/>
                <MainContent videoList={videoList}></MainContent>
            </div>
        </div>
    );
}

export default MainPage;