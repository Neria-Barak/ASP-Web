import './MainPage.css';
import LeftMenu from './LeftMenu/LeftMenu';
import MainContent from './MainContent';
import Search from './Search/Search';

function MainPage({videoList, doSearch, currentUser, toggleDarkMode}) {

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