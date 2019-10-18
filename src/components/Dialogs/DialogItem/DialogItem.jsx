import React from 'react';
import classes from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";



const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div>
            <div className={classes.dialog + ' ' + classes.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div >
            <div className={classes.dialogAvatar}>
                <img src='https://cdn.dribbble.com/users/445111/screenshots/2402531/avatar-01.png' alt=""></img>
            </div>
        </div>

    )
}


export default DialogItem;