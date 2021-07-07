import React from 'react';
import s from "./Nav.module.css";
import MainNav from "./MainNav/MainNav";
import Friends from "./Friends/Friends";


const Nav = (props) => {

    let state = props.store.getState()
    return (
        <nav className={s.nav}>
            <MainNav />
            <Friends navFriends = {state.navFriends}/>
        </nav>
    )
}
export default Nav