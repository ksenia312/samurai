import React from 'react';
import './App.css';
import Header from './companents/Header/Header';
import Nav from './companents/Nav/Nav';
import Profile from "./companents/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./companents/Dialogs/DialogsContainer.js";

const App = (props) => {

    return (
        <div className='app-wripper'>
            <Header/>
            <Nav store={props.store} />
            <div className='app-wripper-main'>
                <Route path="/profile"
                       render={() => <Profile />}
                />
                <Route
                    path="/dialogs"
                    render={() => <DialogsContainer />}
                />

            </div>
        </div>

    );
}

export default App;
