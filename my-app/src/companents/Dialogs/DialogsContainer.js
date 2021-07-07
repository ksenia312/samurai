import React from 'react';
import {sendMesActionCreator, updateMesActionCreator} from "../../Redux/dialogReducer";
import Dialogs from "./Dialogs";
import connect from "react-redux/lib/connect/connect";

let mapStateToProps = (state) => {
    return {
        names: state.dialogsPage.names,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMes: () => {
            dispatch(sendMesActionCreator())
        },
        onMesChange: (text) => {
            dispatch(updateMesActionCreator(text));
        }
    }
}
debugger;
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
debugger;
export default DialogsContainer;