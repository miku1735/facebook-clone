import React from 'react';
import './App.css';
import Header from './appComponent/header/Header';
import Sidebar from './appComponent/appBody/sidebar/Sidebar';
import Feed from "./appComponent/appBody/feed/Feed";
import Contacts from "./appComponent/appBody/contacts/Contacts";
function App() {
  return (
    <div className="app"> 
      <Header/>
      <div className="app__body"> 
        <Sidebar/>
        <Feed/>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
