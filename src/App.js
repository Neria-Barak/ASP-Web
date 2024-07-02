import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from './axiosConfig';

import MainPage from "./MainPage/MainPage";
import SignIn from "./SignInPage/SignIn";
import SignUp from "./SignInPage/SignUp";
import SignOut from "./SignInPage/SignOut";
import EditVideo from "./VideoViewPage/EditVideo";
import AddVideo from "./AddVideoPage/AddVideo";
import VideoView from "./VideoViewPage/VideoView";
import UserVideos from "./UserVideos/UserVideos";

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    
    const [isDark, setIsDark] = useState(false);
    const [videoList, setVideoList] = useState([]);
    const [visibleVideoList, setVisibleVideoList] = useState([]);
    

    useEffect(() => {
        checkUserLoggedIn();
    
        axios.get('/videos')
            .then(response => {
                setVideoList(response.data);
                setVisibleVideoList(response.data);
            })
            .catch(error => console.error('Error fetching videos:', error));

    }, []);

    const checkUserLoggedIn = async () => {
        try {
            const response = await axios.get('/tokens');
            if (response.status === 200) {
                console.log(response.data.user);
                setCurrentUser(response.data.user);
            }
        } catch (error) {
            console.error('Error checking logged in user:', error);
            setCurrentUser(null);
        }
    };
    
    useEffect(() => {
        setVisibleVideoList(videoList);
    }, [videoList]);

    const doSearch = (q) => {
        setVisibleVideoList(videoList.filter((video) => video.title.includes(q)));
    };

    const updateVideoComments = (id, updatedComments) => {
        axios.patch(`/videos/${id}`, { comments: updatedComments })
            .then(response => {
                const updatedVideoList = videoList.map(video => 
                    video._id === id ? response.data : video
                );
                setVideoList(updatedVideoList);
            })
            .catch(error => console.error('Error updating comments:', error));
    };

    const editVideo = (updatedVideo) => {
        const updatedVideoList = videoList.map(video => 
            video._id === updatedVideo._id ? updatedVideo : video
        );
        setVideoList(updatedVideoList);
    };

    const addVideo = (newVideo) => {
        setVideoList([newVideo, ...videoList]);    
    };

    const deleteVideo = (id) => {
        setVideoList(videoList.filter(video => video._id !== id));
    };

    const handleSignIn = async (user, token) => {
       setCurrentUser(user);
       localStorage.setItem('token', token);

    };

    const handleSignOut = () => {
        setCurrentUser(null);
        localStorage.setItem('token', null);
    };

    const handleSignUp = (newUser, token) => {
      setCurrentUser(newUser);
      localStorage.setItem('token', token);
    };

    const toggleDarkMode = () => {
        setIsDark(!isDark);
    };

    return (
        <div className="App" data-theme={isDark ? 'dark-mode' : 'light-mode'}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage videoList={visibleVideoList} doSearch={doSearch} currentUser={currentUser} toggleDarkMode={toggleDarkMode} />} />
                    <Route path="/signin" element={<SignIn onSignIn={handleSignIn}  />} />
                    <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
                    <Route path="/signout" element={<SignOut onSignOut={handleSignOut} />} />
                    <Route path="/watch/:id" element={<VideoView videos={videoList} currentUser={currentUser} toggleDarkMode={toggleDarkMode} updateComments={updateVideoComments} />} />
                    <Route path="/edit/:id" element={<EditVideo videos={videoList} editVideo={editVideo} deleteVideo={deleteVideo} currentUser={currentUser} />} />
                    <Route path="/user/:id" element={<UserVideos currentUser={currentUser} toggleDarkMode={toggleDarkMode}/>} />
                    <Route path="/addvideo" element={<AddVideo addVideo={addVideo} currentUser={currentUser} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
