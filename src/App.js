import MainPage from "./MainPage/MainPage";
import SignIn from "./SignInPage/SignIn";
import SignUp from "./SignInPage/SignUp";
import SignOut from "./SignInPage/SignOut";
import videos from './MainPage/VideoItem/videos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import VideoView from "./VideoViewPage/VideoView";

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [isDark, setIsDark] = useState(false);
    const [videoList, setVideoList] = useState(videos.videos);

    const doSearch = function(q) {
        setVideoList(videos.videos.filter((video) => video.title.includes(q)));
    }

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
        console.log(newUser);
        setUsers([...users, newUser]);
        setCurrentUser(newUser);
        console.log(users);
    };

    const toggleDarkMode = () => {setIsDark(!isDark)};

    return (
        <div className="App" data-theme={isDark ? 'dark-mode' : 'light-mode'}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<MainPage videoList={videoList} doSearch={doSearch} currentUser={currentUser} toggleDarkMode={toggleDarkMode}/>} />
                  <Route path="/signin" element={<SignIn onSignIn={handleSignIn} users={users}/>} />
                  <Route path="/signup" element={<SignUp  onSignUp={handleSignUp}/> } />
                  <Route path="/signout" element={<SignOut onSignOut={handleSignOut} /> } />
                  <Route path="/watch/:id" element={<VideoView videos={videoList} currentUser={currentUser} toggleDarkMode={toggleDarkMode}/> } />                                        
              </Routes>
          </BrowserRouter>
        </div>
    );
}

export default App;