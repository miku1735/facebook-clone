import React from 'react';
import './App.css';
import Header from './appComponent/header/Header';
import Sidebar from './appComponent/appBody/sidebar/Sidebar';
import Feed from "./appComponent/appBody/feed/Feed";
import Contacts from "./appComponent/appBody/contacts/Contacts";
import Login    from "./appComponent/login/Login";
import {UserContext}   from "./userContext/UserContextProvider"

function App() {
  var [userData,] = React.useContext(UserContext)
  const user = userData.name ? true: false;
  return (
      <div className="app">
        {!user ? (<h1><Login/></h1>): 
        ( 
        <>
          <Header/>
          <div className="app__body"> 
            <Sidebar/>
            <Feed/>
            <Contacts/>
          </div>
        </>
        )}
      </div>
  );
}

export default App;
