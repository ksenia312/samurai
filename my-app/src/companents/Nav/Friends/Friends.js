import React from 'react';
import s from "./Friends.module.css";
import Friend from "./Friend/Friend";



const Friends = (props) => {
    let friendsElements = props.navFriends.friends
        .map(el => <Friend friend={el.friend} ava={el.ava}/>)
    return (
        <div className={s.friends}>
            <h2>Friends</h2>
            {friendsElements}

        </div>

    )
}
export default Friends