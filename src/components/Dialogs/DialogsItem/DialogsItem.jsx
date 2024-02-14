import React from "react";
import s from './DialogsItem.module.scss'
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
    const path = `/dialogs/${props.id}`
    
    return (
        <div className={s.item}><NavLink to={path}>{props.name}</NavLink></div>
    )
}

export default DialogsItem;