import React from 'react';
import './SignInPage.css';
import { useNavigate } from 'react-router-dom';

function SignOut({onSignOut}) {

    let navigate = useNavigate();

    const navigateToMain = () => {
        navigate('/');
    };

    const handleCancel = () => navigateToMain();
    const handleSignOut = () => {
        onSignOut();
        navigate('/');
    }

    return (
      <div className='signin-page'>
        <div className="container signout-container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center">
              <h2>Are you sure you want to sign out?</h2>
              <div className="btn-group mt-4">
                <button className="btn btn-primary sign-out-btn" onClick={handleSignOut}>Sign Out</button>
                <button className="btn btn-secondary cancel-btn" onClick={handleCancel}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
}

export default SignOut;