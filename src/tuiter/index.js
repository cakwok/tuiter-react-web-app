import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen/index.js";
import BookmarksScreen from "./bookmarks-screen";
/*import ProfileScreen from "./profile-screen";*/
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list";
import TuitSummaryList from "./tuit-summary-list/index.js";
import TuitList from "./tuits/index"
import {useLocation } from "react-router-dom";

import React from "react";
import whoReducer from "./reducers/who-reducer";
/*import tuitsReducer from "./reducers/tuits-reducer";*/
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";

import ProfileScreen from "./user/profile-screen";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";
import authReducer from "./reducers/auth-reducer";

const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitsReducer,
            user:  authReducer}});

function Tuiter() {
   const { pathname } = useLocation();
   const [ignore, tuiter, active] = pathname.split("/");

    return(
      <Provider store={store}>
       <div>
            <Nav/>
            <div className="row">
               <div className="col-2">
                  <NavigationSidebar />
               </div>
               <div className="col-7">
                  <Routes>
                     <Route path="/home" element={<HomeScreen />} />
                     <Route path="/explore" element={<ExploreScreen />} />
                     <Route path="/bookmarks" element={<BookmarksScreen />} />
                     <Route path="/login"    element={<LoginScreen    />} />
                     <Route path="/register" element={<RegisterScreen />} />
                     <Route path="/profile" element={<ProfileScreen />} />
                     
                  </Routes>
                  {/*Assignment3 
                  {active !== 'explore' && <TuitSummaryList />}
                  */}
              
               </div>
               <div className="col-3">
                  <WhoToFollowList />
               </div>
            </div>
        </div>
       </Provider>
    );
 }
 export default Tuiter
