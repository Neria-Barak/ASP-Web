import './MainPage.css';
import LeftMenu from './LeftMenu/LeftMenu';
import MainContent from './MainContent';

function MainPage() {

    return (
        <div className="container-fluid">
            <div className="row">
                <LeftMenu/>
                <MainContent></MainContent>
            </div>
        </div>
    );
}

export default MainPage;