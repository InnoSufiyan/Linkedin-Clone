import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate
} from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import { auth, provider } from './config/firebase'
import { onAuthStateChanged  } from "firebase/auth";
import Home from './components/Home';

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userCondition } from './slices/signInSlice'

function App() {
  let navigate = useNavigate();
  const dispatch = useDispatch()

  const userState = useSelector((state) => state.userState.user)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(uid)
        dispatch(userCondition(user))
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
    userState &&
      navigate("/home")

  }, [])



  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<><Header /> <Home /></>} />
      </Routes>
    </div>
  );
}

export default App;
