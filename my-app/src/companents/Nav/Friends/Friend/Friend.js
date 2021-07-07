import React from 'react';
import s from "./Friend.module.css";


const Friend = (props) => {
    return (
        <div className={s.friend}>
            <div className={s.friendAva}> <img src={props.ava} alt="аватарка"/> </div>
            <div className={s.friendName}> {props.friend} </div>
        </div>

    )
}
export default Friend