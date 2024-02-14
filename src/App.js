import React from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Setting";

const App = (props) => {
  return (
      <div className="app-wrapper">
        <Header className="header" />
        <main className="main">
          <div className="main__container">
            <Nav />
            <div className="main__content">
              <Routes>
                <Route path='/profile' element= {<Profile postData= {props.state.profilePage.postData}
                postInfo= {props.state.profilePage.postInfo}/>} />
                <Route path='/dialogs' element= { <Dialogs dialogsData= {props.state.messagesPage.dialogsData} />}/>
                <Route path='/news' element= {<News />} />
                <Route path='/music' element= {<Music />} />
                <Route path='/settings' element={<Settings />} />
              </Routes>
            </div>
          </div>
        </main>
        <Footer className="footer" />
      </div>
  );
};

export default App;
