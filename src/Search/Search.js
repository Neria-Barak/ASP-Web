import { useRef } from "react";
import { useNavigate } from 'react-router-dom';

function Search({doSearch}) {

    const searchBox = useRef(null)
    const search = function() {
        doSearch(searchBox.current.value)
    }

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('../SignInPage/SignIn.js');
    };

    return(
        <div className="row bg-white justify-content-center">
            <div className="col-8">
                <div className="d-flex align-items-center mb-3 p-2">
                    <div className="input-group mb-3 p-2">
                        <input ref={searchBox} onKeyUp={search} type="text" className='form-control' placeholder='Search' aria-label="Search" aria-describedby='button-addon2'></input>
                        <button className='btn btn-outline-secondary' type='button' id='button-addon2'><i className='bi bi-search me-3'></i></button>
                    </div>
                    <button id="sign-in" type="button" class="btn btn-outline-primary" onClick={handleButtonClick}>
                        <i className={`bi bi-person-circle fs-3`}></i>
                        <span className="w-100 m-1 ms-3">Sign In</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Search;