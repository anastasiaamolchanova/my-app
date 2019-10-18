import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/MessageItem';




const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData
        .map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = props.state.messageData
        .map(m => <MessageItem text={m.text} id={m.id} />)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div >
    )
}

export default Dialogs;