import React from 'react';
import './SignInPage.css';
import { useNavigate } from 'react-router-dom';
import axios from '../axiosConfig';

function SignOut({ onSignOut,currentUser, onDeleteUser, onEditUser }) {
    let navigate = useNavigate();

    const navigateToMain = () => {
        navigate('/');
    };

    const handleCancel = () => navigateToMain();

    const handleSignOut = () => {
        onSignOut();
        navigate('/');
    };

    const handleDeleteUser = async () => {
      if (currentUser) {
        const response = await axios.delete(`/users/${currentUser._id}`);
        if (response.status === 200) {
          onDeleteUser();
          navigate('/');
        } else {
          alert("deleting user unseccessful");
        }
    }
    };

    const handleEditUser = () => {
        navigate('/edit-user'); 
    };

    return (
      <div className='signin-page'>
      <div className="container signout-container">
          <div className="row justify-content-center">
              <div className="col-md-6 text-center">
                  <span id='signout-message'>Are you sure you want to sign out?</span>
                  <div className="btn-group mt-4 d-flex flex-column">
                      <button className="btn btn-primary sign-out-btn mb-1" onClick={handleSignOut}>Sign Out</button>
                      <button className="btn btn-danger delete-user-btn mb-1" onClick={handleDeleteUser}>Delete User</button>
                      <button className="btn btn-secondary edit-user-btn mb-1" onClick={handleEditUser}>Edit User</button>
                      <button className="btn btn-secondary cancel-btn mb-1" onClick={handleCancel}>Cancel</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
    );
}

export default SignOut;
