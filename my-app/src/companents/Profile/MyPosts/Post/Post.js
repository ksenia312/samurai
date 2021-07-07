import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.post}>
                <img src='https://i.pinimg.com/236x/7c/ab/18/7cab184c5e791921ed607e23458492b6.jpg' alt='ava'/>
                <p> {props.message} </p>
            </div>
            <div className={s.like}>
                <button>
                    like
                </button>
                <p> {props.count}</p>
            </div>
        </div>
    )
}
export default Post