import React from 'react';
import { useNavigate } from 'react-router-dom';

function ShrinkedLeftMenu() {
    const navigate = useNavigate();

    const showMenu = () => {
        navigate('/');
    };

    return (
        <div id="left" className="col-1 bg-light vh-100">
            <ul className="list-group">
                <button onClick={showMenu}>
                    <i className={`bi bi-list fs-3`}></i>
                </button>
            </ul>
        </div>
    );
}

export default ShrinkedLeftMenu;