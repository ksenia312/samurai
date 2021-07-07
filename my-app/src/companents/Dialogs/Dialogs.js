import React from 'react';
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import Name from "./Name/Name";

const Dialogs = (props) => {
    let namesElements = props.names
        .map(dialog => <Name name={dialog.name} iden={dialog.iden}/>);
    let mesElements = props.messages
        .map(el => <Message mes={el.mes}/>);

    let newMesElement = React.createRef();

    let addMes = () => {
        props.addMes()
    }
    let onMesChange = () => {
        let text = newMesElement.current.value;
        props.onMesChange(text)
    }
    return (
        <div>
            <div className={s.adding}>
                <textarea
                    ref={newMesElement}
                    placeholder="Write a message"
                    value={props.newMessageBody}
                    onChange={onMesChange}
                />
                <button onClick={addMes}>Add Message!</button>
            </div>
            <div className={s.dialogs}>

                <div className={s.names}>
                    {namesElements}
                </div>
                <div className={s.messages}>
                    {mesElements}

                </div>
            </div>
        </div>
    )
}
export default Dialogs