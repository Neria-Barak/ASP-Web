import './MainPage.css';
import LeftMenu from './LeftMenu/LeftMenu';
import MainContent from './MainContent';

function MainPage({currentUser}) {

    return (
        <div className="container-fluid">
            <div className="row">
                <LeftMenu/>
                <MainContent currentUser={currentUser}></MainContent>
            </div>
        </div>
    );
}

export default MainPage;