import React from "react";
import s from './Dialog.module.scss'

const Dialog = (props) => {

    let newMessage = React.createRef();
    const createMessage = () => {
        newMessage = newMessage.current.value;
        props.addMessage(newMessage);
        console.log(newMessage);
    }

    let dialogDataEl = props.dialogData.map(m => <p>{m.message}</p>)

    return (
        <div className={s.dialog_container}>
            <div className={s.messages}>
                {dialogDataEl}
            </div>
            <div className={s.messages__add}>
                <textarea ref={newMessage} placeholder="New message..." name="" id="" cols="30" rows="10"></textarea>
                <span onClick={ createMessage} >send</span>
            </div>
        </div>
    )
}

export default Dialog;