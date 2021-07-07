const ADD_NEW_MESSAGE_BODY = 'ADD-NEW-MESSAGE-BODY';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
let initialState = {
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
};
const dialogReducer = (state=initialState, action) => {
    let stateCopy={...state};
    switch (action.type) {
        case UPDATE_MESSAGE:
            stateCopy.newMessageBody = action.newText;
            return stateCopy
        case ADD_NEW_MESSAGE_BODY:
            let newMes = {
                iden: "1",
                mes: state.newMessageBody
            };
            if (newMes.mes > '') {
                stateCopy.messages=[...state.messages]
                stateCopy.messages.push(newMes);
                let forname = {
                    iden: "2", name: "Anonim"
                };
                stateCopy.names=[...state.names]
                stateCopy.names.push(forname);
            }
            stateCopy.newMessageBody = '';
            return stateCopy
        default:
            return state
    }
}

export const sendMesActionCreator = () => ({type: ADD_NEW_MESSAGE_BODY})
export const updateMesActionCreator = (text) => ({type: UPDATE_MESSAGE, newText: text})
export default dialogReducer