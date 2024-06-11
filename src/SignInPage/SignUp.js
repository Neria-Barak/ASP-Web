import React from 'react';
import './SignInPage.css';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

function SignUp({onSignUp}) {

    let navigate = useNavigate();

    const navigateToMain = () => {
        navigate('/');
    };

    const [username, setUsername] = useState('');
    const [visibleName, setVisibleName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmation, setConfirmation] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [error, setError] = useState('');

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*\d)[A-Za-z\d]{8,16}$/;
        return passwordRegex.test(password);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const fileURL = URL.createObjectURL(file);
          setProfilePicture(fileURL);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmation) {
            setError('Passwords do not match.');
            return
        }
        if (!validatePassword(password)) {
            setError('Password must be 8-16 characters long and contain at least one number.');
            return;
        }
        setError('');
        const newUser = { username, visibleName, password, profilePicture };
        onSignUp(newUser);
        navigateToMain();
    };

    return (
        <div className='signin-page'>
            <div className="signin-container">
                <form id="signup" className="signin-form" onSubmit={handleSubmit}>
                    <div className='left-group'>
                        <h2>Sign Up</h2>
                        <h3>to continue to youtube</h3>
                        {error && <div className="alert alert-danger">{error}</div>}
                    </div>
                    <div className='right-group'>
                        <div className="form-group">
                            <label htmlFor="profilePicture">Profile Picture</label>
                            <input 
                                type="file" 
                                className="form-control" 
                                id="inputGroupFile02" 
                                onChange={handleFileChange}
                                required
                                />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Visible name</label>
                            <input
                                type="text"
                                id="username"
                                value={visibleName}
                                onChange={(e) => setVisibleName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Confirm password</label>
                            <input
                                type="password"
                                id="password"
                                value={confirmation}
                                onChange={(e) => setConfirmation(e.target.value)}
                                required
                            />
                        </div>
                        <div className="submit">
                            <Link to='/signin' className='card-link'>Already have an account?</Link>
                            <button type="submit" className="signin-button">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>    
    );
}

export default SignUp;