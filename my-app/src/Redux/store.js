/*
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import navReducer from "./navReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {iden: "1", message: "How are you?", count: 12},

            ],
            newPostText: ''
        },
        dialogsPage: {
            names: [
                {iden: "1", name: "Ksenia"},
                {iden: "2", name: "Vanya"},
                {iden: "3", name: "Cola"},
                {iden: "4", name: "Vasya"},
                {iden: "5", name: "Kirill"},
                {iden: "6", name: "Nicolay"},
                {iden: "7", name: "Leo"},
                {iden: "8", name: "Oleg"},
            ],
            messages: [
                {iden: "1", mes: "How are you?"},
                {iden: "2", mes: " I am fine"},
                {iden: "3", mes: "Good"},
                {iden: "4", mes: "Excellent"},
                {iden: "5", mes: "Wonderful"},
                {iden: "6", mes: "Fantastic."},
                {iden: "7", mes: "Exceptional"},
                {iden: "8", mes: "Terrific"},

            ],
            newMessageBody: '',
        },
        navFriends: {
            friends: [
                {
                    iden: "1", friend: "Ilia",
                    ava: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAAEDCAMAAABQ/CumAAAAA1BMVEUZy8uQNbCYAAAASElEQVR4nO3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIB7A8VJAAEcmy75AAAAAElFTkSuQmCC"
                },
                {
                    iden: "1", friend: "Katya",
                    ava: "https://fony-kartinki.ru/_ph/76/2/958912065.jpg"
                },
                {
                    iden: "1", friend: "Mary",
                    ava: "https://ae01.alicdn.com/kf/HTB1n9whRXXXXXXNapXXq6xXFXXXI/HUAYI-%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%8B%D0%B9-%D0%BE%D0%B4%D0%BD%D0%BE%D1%82%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9-%D1%84%D0%BE%D0%BD-%D1%85%D1%83%D0%B4%D0%BE%D0%B6%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D1%82%D0%BA%D0%B0%D0%BD%D0%B5%D0%B2%D1%8B%D0%B9-%D1%81%D1%82%D1%83%D0%B4%D0%B8%D0%B9%D0%BD%D1%8B%D0%B9-%D1%84%D0%BE%D0%BD-%D0%B4%D0%BB%D1%8F-%D0%BD%D0%BE%D0%B2%D0%BE%D1%80%D0%BE%D0%B6%D0%B4%D0%B5%D0%BD%D0%BD%D1%8B%D1%85-%D0%94%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B9-%D1%84%D0%BE%D0%BD-%D0%B4%D0%BB%D1%8F-%D1%84%D0%BE%D1%82%D0%BE%D1%81%D1%8A%D0%B5%D0%BC%D0%BA%D0%B8-XT-5707.jpg"
                },


            ],

        }
    },
    _rerender() {
    },
    getState() {
        return this._state
    },
    subscribe(obs) {
        this._rerender = obs
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._state.navFriends = navReducer(this._state.navFriends, action)
        this._rerender(this._state)

    }

}


export default store*/
