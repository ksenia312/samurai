const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState = {
    posts: [
        {iden: "1", message: "How are you?", count: 12},
    ],
    newPostText: ''
}
const profileReducer = (state=initialState,action) => {
    let stateCopy={...state};
    debugger
    switch (action.type) {
        case ADD_POST :
            let newPost = {
                iden: 5,
                message: state.newPostText,
                count: 0,
            };
            stateCopy.posts=[...state.posts]
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = ''
            return stateCopy
        case UPDATE_NEW_POST_TEXT :
            stateCopy.newPostText = action.newText;
            return stateCopy
        default:
            return state
    }

}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer