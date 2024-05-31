import React from 'react';
import './SignInPage.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SignUp() {

    let navigate = useNavigate();

    const navigateToMain = () => {
        navigate('/');
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*\d)[A-Za-z\d]{8,16}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validatePassword(password)) {
            setError('Password must be 8-16 characters long and contain at least one number.');
            return;
        }
        console.log('Username:', username);
        console.log('Password:', password);
        setError('');
        navigateToMain();
    };

    return (
        <div className="signin-container">
            <form className="signin-form" onSubmit={handleSubmit}>
                <div className='left-group'>
                    <h2>Sign Up</h2>
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
                        <button type="submit" className="signin-button">Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignUp;