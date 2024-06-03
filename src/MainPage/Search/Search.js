import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Search({doSearch, currentUser, toggleDarkMode}) {

    const searchBox = useRef(null)
    const search = function() {
        doSearch(searchBox.current.value)
    }

    let navigate = useNavigate();

    const navigateToSignIn = () => {
        navigate('/signin');
    };
    const navigateToSignOut = () => {
        navigate('/signout');
    };

    return(
        <div className="justify-content-center">
            <div className="d-flex align-items-center mb-3 p-2" id="head">
                <div className="name-logo">
                    <img src="favicon.ico" alt="..." className="logo"></img>
                    <div className="Youtube">YouTube</div>
                </div>
                <div class="form-check form-switch" id="switch-mode">
                    <input onChange={toggleDarkMode} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                </div>
                <i className={`bi bi-moon fs-3`}></i>
                <div className="input-group mb-3 p-2" id="search-group">
                    <input id="search-bar" ref={searchBox} onKeyUp={search} type="text" className='form-control' placeholder='Search' aria-label="Search" aria-describedby='button-addon2'></input>
                    <button className='btn btn-outline-secondary' type='button' id='button-addon2'><i className='bi bi-search me-3'></i></button>
                </div>
                <div id="user-profile-picture">
                {(currentUser == null) ? (
                    <button id="sign-in" type="button" className="btn btn-outline-primary" onClick={navigateToSignIn}>
                        <i className={`bi bi-person-circle fs-3`}></i>
                        <span className="w-100 m-1 ms-3">Sign In</span>
                    </button>
                    ) : (
                    <img src={currentUser.profilePicture} alt="Profile" id="profile-picture" onClick={navigateToSignOut}/>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Search;