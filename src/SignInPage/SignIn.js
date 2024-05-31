import React from 'react';
import './SignInPage.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SignIn() {

    let navigate = useNavigate();

    const navigateToMain = () => {
        navigate('/');
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        setError('Username doesn\'nt exist');
    };

    return (
        <div className="signin-container">
            <form className="signin-form" onSubmit={handleSubmit}>
                <div className='left-group'>
                    <h2>Sign In</h2>
                    <h3>to continue to youtube</h3>
                </div>
                <div className='right-group'>
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
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div class="submit">
                        <a href='/signup' className='card-link'>Create account</a>
                        <button type="submit" className="signin-button">Sign In</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignIn;