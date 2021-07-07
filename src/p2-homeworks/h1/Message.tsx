import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,

}

function Message(props: MessagePropsType) {
    return (
        <div className={s.messageComponent}>
            <img className={s.img} src={props.avatar} alt="avatar"/>
            <div className={s.mesAll}>
                <div className={s.tail}/>
                <div className={s.messageBox}>
                    <p className={s.name}>{props.name}</p>
                    <p className={s.message}>{props.message}</p>
                    <p className={s.time}>{props.time}</p>
                </div>
            </div>
        </div>
    )
}

export default Message
