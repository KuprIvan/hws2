import React, {FC} from 'react'
import s from './FriendMessage.module.css'
import {MessagePropsType} from '../message/Message';

// создать тип вместо any и отобразить приходящие данные

const FriendMessage:FC<MessagePropsType> = ( {message} ) => {
    return (
        <div
            id={'hw1-friend-message-' + message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + message.id}
                    alt="Avatar"
                    src={ message.user.avatar }
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + message.id}
                        className={ s.friendName }
                    >
                        <p>{ message.user.name }</p>
                    </div>
                    <pre
                        id={'hw1-friend-text-' + message.id}
                        className={s.friendMessageText}
                    >
                       <p>{ message.message.text }</p>
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + message.id}
                className={s.friendTime}
            >
                <p>{message.message.time}</p>
            </div>
        </div>
    )
}

export default FriendMessage
