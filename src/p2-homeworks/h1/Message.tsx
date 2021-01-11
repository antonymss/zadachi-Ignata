import React from "react";
import m from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={m.messageWrapper}>
            <div className={m.avatar}>
                <img src={props.avatar} alt="avatar" height='50' width='50'/>
            </div>
            <div className={m.messageBody}>
                <div>
                    <div className={m.messageName}>{props.name}</div>
                    <div className={m.message}>
                        {props.message}
                    </div>
                </div>
                <div className={m.time}>{props.time}</div>
            </div>

        </div>
    );
}

export default Message;
