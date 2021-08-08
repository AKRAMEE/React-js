import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './Firebase';
import Widgets from './Widgets';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        dispatch(logout());
      }
    })
  })
  return (
    <div className="app">
      {/**Header*/}
      <Header />
      {!user ? <Login /> : (
        <div className="app__body">

          {/*sidebar */}
          <Sidebar />

          {/**feed */}
          <Feed />
          {/**widgets */}
          <Widgets />
        </div>
      )}



    </div>
  );
}

export default App;
