import React, { useState, useEffect } from 'react'
import './style.css'
import { Loader } from '../loader'
import { UserItem } from '../user_item/index.js'
import usersJSON from '../../stub/users.json'

export function UserList(props) {

    const [isLoading, setIsLoading] = useState(true)
    const [users, setUsers] = useState(usersJSON)

    const deleteUser = (id) => {
        const filteredUsersArray = []
        users.map(el => {
            if (el.id !== id) {
                filteredUsersArray.push(el)
            }
            setUsers(filteredUsersArray)
        })
    }

    const findUser = (e) => {
        users.map(el => {
            if (el.name.toLowerCase() === e.target.value.toLowerCase() || el.email.toLowerCase() === e.target.value.toLowerCase()) {
                setUsers([el])
            }
            else if (el.phone.toLowerCase() === e.target.value.toLowerCase() || el.website.toLowerCase() === e.target.value.toLowerCase()) {
                setUsers([el])
            }
            else if (el.company.toLowerCase() === e.target.value.toLowerCase() || el.id.toString() === e.target.value.toString()) {
                setUsers([el])
            }
            else if (e.target.value.toLowerCase() === '' || e.target.value.toLowerCase() === null) {
                setUsers(usersJSON)
            }
        })
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

    if (isLoading) {
        return <Loader />
    }

    return (
        <div className='container__users users'>
            <h2>
                Пользователи
            </h2>

            <form className='container__users_form'>
                <input type='text' placeholder='Найти пользователя' onChange={(e) => findUser(e)} />
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
                            return <UserItem key={el.id} data={el} deleteUser={deleteUser} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}