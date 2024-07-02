import React from 'react';
import './SignInPage.css';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from '../axiosConfig';

function EditUser({onEditUser, currentUser}) {
    
    const [username, setUsername] = useState(currentUser.username);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [displayName, setDisplayName] = useState('');

    let navigate = useNavigate();

    const navigateToMain = () => {
        navigate('/');
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*\d)[A-Za-z\d]{8,16}$/;
        return passwordRegex.test(password);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            const base64String = reader.result;
            setProfilePicture(base64String); // base64 string
    };

        reader.readAsDataURL(file);
    };
    

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validatePassword(password)) {
            setError('Password must be 8-16 characters long and contain at least one number.');
            return;
        }
        setError('');
        try {
            console.log(currentUser);
            const response = await axios.patch(`/users/${currentUser._id}`, {
                username,
                password,
                displayName,
                profilePicture
            }, {headers: {
                'Content-Type': 'application/json',
            }});
            if (response.status === 200) {
                if (response.data) {
                    const response = await axios.get(`/users/${currentUser._id}`)
                    onEditUser(response.data);
                    navigateToMain();
                }
            } 
            
        } catch (error) {
            setError('invalid username or password');
    
        }
    };

    
        return (
            <div className='signin-page'>
                <div className="signin-container">
                    <form id="signup" className="signin-form" onSubmit={handleSubmit}>
                        <div className='left-group'>
                            <h2>Edit User</h2>
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
                                    value={displayName}
                                    onChange={(e) => setDisplayName(e.target.value)}
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
                            <div className="submit">
                                <button type="submit" className="signin-button">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>    
        );
    }
    


export default EditUser;