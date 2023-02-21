import React, {FC, useState} from 'react'
import { v1 } from 'uuid'
import s2 from '../../s1-main/App.module.css'
import GreetingContainer from './GreetingContainer'
import User from '../hw08/User';

/*
* 1 - описать тип UserType // TODO DONE
* 2 - указать нужный тип в useState с users // TODO DONE
* 3 - дописать типы и логику функции pureAddUserCallback и проверить её тестами // TODO DONE
* 4 - в файле GreetingContainer.tsx дописать типизацию пропсов // TODO DONE
* 5 - в файле GreetingContainer.tsx указать нужные типы в useState с name и error // TODO DONE
* 6 - в файле GreetingContainer.tsx дописать тип и логику функции setNameCallback // TODO DONE
* 7 - в файле GreetingContainer.tsx дописать логику функций pureAddUser, pureOnBlur, pureOnEnter и проверить их тестами // TODO DONE
* 8 - в файле GreetingContainer.tsx вычислить количество добавленных и имя последнего (totalUsers, lastUserName) // TODO DONE
* 9 - в файле Greeting.tsx дописать типизацию пропсов // TODO DONE
* 10 - в файле Greeting.tsx вычислить inputClass в зависимости от наличия ошибки // TODO DONE
* 11 - сделать стили в соответствии с дизайном
* */

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

export const pureAddUserCallback = (name: string, setUsers: (users: Array<UserType>) => void, users: Array<UserType>) => { // need to fix any
    const user = { // need to fix
        _id: v1(),
        name
    }
    setUsers([...users, user])
}

const HW3 = () => {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string): void => { // need to fix any
        pureAddUserCallback(name, setUsers, users)
    }

    return (
        <div id={'hw3'}>
            <div className={s2.hwTitle}>Homework #3</div>
            {/*для автоматической проверки дз (не менять)*/}

            <div className={s2.hw}>
                <GreetingContainer
                    users={users}
                    addUserCallback={addUserCallback}
                />
            </div>
        </div>
    )
}

export default HW3
