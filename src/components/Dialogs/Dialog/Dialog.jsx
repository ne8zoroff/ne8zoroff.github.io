import React from "react";
import s from './Dialog.module.scss'

const Dialog = (props) => {

    const dialogData = [
        { id: 0, message: 'Hi!!!' },
        { id: 1, message: 'How are you?' },
        { id: 2, message: 'Cray men' },
    ]

    let dialogDataEl = dialogData.map( m => <p>{m.message}</p>)

    return (
        <div className={s.messages}>
            {dialogDataEl}
        </div>
    )
}

export default Dialog;