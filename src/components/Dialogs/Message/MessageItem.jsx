import React from 'react';
import classes from './../Dialogs.module.css';





const MessageItem = (props) => {
    return (
        <div className={classes.dialogs}>
            {props.text}
        </div>
    )
}


export default MessageItem;