import MainPage from "./MainPage/MainPage";
import SignIn from "./SignInPage/SignIn";
import SignUp from "./SignInPage/SignUp";
import SignOut from "./SignInPage/SignOut";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from "react";

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const [users, setUsers] = useState([]);

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

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage currentUser={currentUser}/>} />
                <Route path="/signin" element={<SignIn onSignIn={handleSignIn}/>} />
                <Route path="/signup" element={<SignUp  onSignUp={handleSignUp}/> } />
                <Route path="/signout" element={<SignOut onSignOut={handleSignOut} /> } />                                        
            </Routes>
        </BrowserRouter>
    );
}

export default App;