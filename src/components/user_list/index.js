import React, { useState, useEffect } from 'react'
import './style.css'

import { UserItem } from '../user_item/index.js'
import usersJSON from '../../stub/users.json'

export function UserList() {

    const [users, setUsers] = useState(usersJSON)

    return (
        <div className='container__users users'>
            <h2>
                Пользователи
            </h2>

            <form className='container__users_form'>
                <input type='text' placeholder='Данные пользователя' />
                <button>Удалить ... пользователей</button>
                <button>Добавить пользователя</button>
            </form>

            <div className='users__table table'>
                <div className='table__header'>
                    <div className='table__cell'>
                        <div>Выбор</div>
                    </div>
                    <div className='table__cell'>
                        <div>ID</div>
                    </div>
                    <div className='table__cell'>
                        <div>Аватар</div>
                    </div>
                    <div className='table__cell'>
                        <div>Имя</div>
                    </div>
                    <div className='table__cell'>
                        <div>Почта</div>
                    </div>
                    <div className='table__cell'>
                        <div>Телефон</div>
                    </div>
                    <div className='table__cell'>
                        <div>Вебсайт</div>
                    </div>
                    <div className='table__cell'>
                        <div>Компания</div>
                    </div>
                    <div className='table__cell'>
                        <div>Действие</div>
                    </div>
                </div>
                <div className='table__content'>
                    {
                        users.map(el => {
                            return <UserItem key={el.id} data={el} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}