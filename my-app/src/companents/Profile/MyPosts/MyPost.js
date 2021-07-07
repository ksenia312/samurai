import React from 'react';
import Post from "./Post/Post";
import s from "./MyPost.module.css"

const MyPost = (props) => {
    let postsElements = props.posts.map(post =>
        <Post message={post.message} count={post.count}/>);
    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPost(text)
    }
    return (
        <div>
            <div className={s.myPosts}>
                <h2>My posts</h2>
            </div>
            <div className={s.PostBUT}>
                <textarea
                    ref={newPostElement}
                    placeholder="Text new post"
                    value={props.newPostText}
                    onChange={onPostChange}/>
                <button onClick={onAddPost}>Add post</button>
                <button>Remove post</button>
            </div>
            <div className='posts'>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPost