import React, { useState, useEffect } from 'react'
import './style.css'
import { Link, useParams } from 'react-router-dom'
import { Loader } from '../loader'
import usersJSON from '../../stub/users.json'

export function UserDetail() {

    const { id } = useParams()
    const [users, setUsers] = useState(usersJSON)
    const [user, setUser] = useState(null)

    useEffect(() => {
        setInterval(() => {
            users.map(el => {
                if (id == el.id) {
                    setUser(el)
                }
            })
        }, 1000)
    }, [])

    if (!user) {
        return <Loader />
    }

    return (
        <div className='container__user_detail'>
            <h2>
                Профиль пользователя
            </h2>
            <div className='container__user_detail_card'>
                <div className='container__user_info'>
                    <img src={user.avatar}></img>
                    <Link to='/users'>
                        <button>
                            Назад к таблице
                        </button>
                    </Link>
                </div>
                <div className='container__user_detail_form'>
                    <form>
                        <p>Имя</p>
                        <input type='text' defaultValue={user.name} name='name' />
                        <p>Логин</p>
                        <input type='text' defaultValue={user.username} name='username' />
                        <p>Почта</p>
                        <input type='text' defaultValue={user.email} name='email' />
                        <p>Адрес</p>
                        <input type='text' defaultValue={user.address} name='address' />
                        <p>Город</p>
                        <input type='text' defaultValue={user.city} name='city' />
                        <p>Почтовый индекс</p>
                        <input type='text' defaultValue={user.zipcode} name='zipcode' />
                        <p>Телефон</p>
                        <input type='text' defaultValue={user.phone} name='phone' />
                        <p>Вебсайт</p>
                        <input type='text' defaultValue={user.website} name='website' />
                        <p>Место работы</p>
                        <input type='text' defaultValue={user.company} name='company' />
                    </form>
                </div>
            </div>
        </div>
    )
}