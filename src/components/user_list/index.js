import React, {useState, useEffect} from 'react'
import './style.css'

import {UserItem} from '../user_item/index.js'
import usersJSON from '../../stub/users.json'

export function UserList() {
    
    const [users, setUsers] = useState(usersJSON)

    return (
        <div className='container__users users'>
            <h2>
                Пользователи
            </h2>
            <form>
                <input type='text' placeholder='Данные пользователя'/>
                <button>Удалить ... пользователей</button>
                <button>Добавить пользователя</button>
            </form>
            <ul className='users__table'>
                {
                    users.map(el => {
                        return <UserItem key={el.id} data={el}/>
                    })
                }
            </ul>
        </div>
    )
}