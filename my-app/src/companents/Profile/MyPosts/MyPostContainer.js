import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/profileReducer";
import MyPost from "./MyPost";
import connect from "react-redux/lib/connect/connect";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPost: (text) => {
            dispatch(updateNewPostActionCreator(text));
        }
    }
}
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)
export default MyPostContainer;