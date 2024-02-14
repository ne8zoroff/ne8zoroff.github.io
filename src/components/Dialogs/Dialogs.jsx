import React from "react";
import DialogsItem from "./DialogsItem/DialogsItem";
import s from './Dialogs.module.scss'
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {
    let dialogItemEl = props.dialogsData.map(dialog =>
        <DialogsItem id={dialog.id} name={dialog.name} />
    )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogItemEl}
            </div>
            <div className={s.dialogs__dialog}>
                <Dialog id='0' />
            </div>
        </div>
    );
}

export default Dialogs;