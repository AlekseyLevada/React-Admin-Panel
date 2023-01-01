import React, { useEffect, useState } from 'react'
import './style.css'
import user from '../../stub/users.json'

/**
 * Компонент для генерирования страницы приложения 'Пользователи'
 */

export function Users() {
    const [users, setUsers] = useState(user)
    

    return (
        <div className='container__users'>
            <h2>
                Пользователи
            </h2>
            <ul>
                {
                    users.map(el => {
                        return <img key={el.id} src={el.avatar}/>
                    })
                }
            </ul>
        </div>
    )
}