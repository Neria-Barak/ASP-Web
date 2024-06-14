import MainPage from "./MainPage/MainPage";
import SignIn from "./SignInPage/SignIn";
import SignUp from "./SignInPage/SignUp";
import SignOut from "./SignInPage/SignOut";
import videos from './MainPage/VideoItem/videos';
import EditVideo from "./VideoViewPage/EditVideo";
import AddVideo from "./AddVideoPage/AddVideo";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import VideoView from "./VideoViewPage/VideoView";

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [isDark, setIsDark] = useState(false); 
    const [videoList, setVideoList] = useState(videos.videos);
    const [visibleVideoList, setVisibleVideoList] = useState(videos.videos);

    useEffect(() => {
        setVisibleVideoList(videoList);
    }, [videoList]);

    const doSearch = function(q) {
        setVisibleVideoList(videoList.filter((video) => video.title.includes(q)));
    }

    const updateVideoComments = (id, updatedComments) => {
        const updatedVideoList = videoList.map(video => {
            if (video.id.toString() === id) {
                return {
                ...video,
                comments: updatedComments
                };
            }
            return video;
        });
        setVideoList(updatedVideoList);
    };

    const editVideo = ({ id, title, author, img, description, video }) => {
        const updatedVideoList = videoList.map(vid => {
            if (vid.id.toString() === id) {
                return {
                    ...vid,
                    title: title,
                    author: author,
                    img: img,
                    description: description,
                    video: video
                };
            }
            return vid;
        });
        setVideoList(updatedVideoList);
    };
    const addVideo = ({ title, author, img, description, video }) => {
        setVideoList([ {"title": title,
                        "author": author,
                        "views": 0,
                        "time": "1 second",
                        "img": img,
                        "description": description,
                        "video": video,
                        "id": (videoList.length + 1),
                        "comments": []}
                        , ...videoList])
    }

    const deleteVideo = (id) => {
        const updatedVideoList = videoList.filter(video => video.id !== parseInt(id));
        setVideoList(updatedVideoList);
    };

    const handleSignIn = (username, password) => {
      const user = users.find(user => user.username === username && user.password === password);
      if (user) {
          setCurrentUser(user);
      } else {
          alert("Invalid username or password");
      }
    };
    const handleSignOut = () => setCurrentUser(null);
    const handleSignUp = (newUser) => {
        setUsers([...users, newUser]);
        setCurrentUser(newUser);
    };

    const toggleDarkMode = () => {setIsDark(!isDark)};

    return (
        <div className="App" data-theme={isDark ? 'dark-mode' : 'light-mode'}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<MainPage videoList={visibleVideoList} doSearch={doSearch} currentUser={currentUser} toggleDarkMode={toggleDarkMode}/>} />
                  <Route path="/signin" element={<SignIn onSignIn={handleSignIn} users={users}/>} />
                  <Route path="/signup" element={<SignUp  onSignUp={handleSignUp}/> } />
                  <Route path="/signout" element={<SignOut onSignOut={handleSignOut} /> } />
                  <Route path="/watch/:id" element={<VideoView videos={videoList} currentUser={currentUser} toggleDarkMode={toggleDarkMode} updateComments={updateVideoComments}/> } />                                        
                  <Route path="/edit/:id" element={<EditVideo videos={videoList} editVideo={editVideo} deleteVideo={deleteVideo}/>}></Route>
                  <Route path="/addvideo" element={<AddVideo addVideo={addVideo}/> } />                                            
              </Routes>
          </BrowserRouter>
        </div>
    );
}

export default App;