import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axiosConfig';
import './UserVideos.css';
import VideoItem from '../MainPage/VideoItem/VideoItem';
import Search from '../MainPage/Search/Search';

function UserVideos({currentUser, toggleDarkMode}) {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get(`/users/${id}/videos`);
                const videoList = response.data.map((video, key) => {
                    return <VideoItem {...video} key={key}></VideoItem>
                });
                setVideos(videoList);

            } catch (err) {
                setError('Error fetching videos');
                console.error('Error fetching videos:', err);
            } finally {
                setLoading(false);
            }
        };
        const fetchUser = async () => {
            const response = await axios.get(`/users/${id}`);
            setUser(response.data.user);
        }
        fetchUser()
        fetchVideos();
    }, [id]);
    

    if (loading) {
        return <p>Loading videos...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="user-videos">
            <div className='row'>
                <Search doSearch={() => {}} currentUser={currentUser} toggleDarkMode={toggleDarkMode}></Search>
            </div>
            <div id='author-data' className='row'>
                <img src={user.profilePicture} alt="Profile" id="author-picture"/>
                <h1 id='author-name'>{user.displayName}</h1>
            </div>
            <div className='row'>
                {videos.length === 0 ? (
                    <p>No videos found for this author.</p>
                ) : (
                    <div id="author-videos-list">
                        {videos}
                    </div>
                )}
            </div>
        </div>
    );
}

export default UserVideos;
