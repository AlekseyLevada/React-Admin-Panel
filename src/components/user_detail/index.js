import './style.css'
import React, { useState, useEffect, useRef } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Loader } from '../loader'
import usersJSON from '../../stub/users.json'

export function UserDetail() {

    const { id } = useParams()
    const [users, setUsers] = useState(usersJSON)
    const [user, setUser] = useState(null)

    const ref = useRef()
    const navigate = useNavigate()

    const saveUser = () => {
        const dataFromForm = new FormData(ref.current)

        const newFormObject = {
            name: dataFromForm.get('name'),
            username: dataFromForm.get('username'),
            email: dataFromForm.get('email'),
            address: dataFromForm.get('address'),
            city: dataFromForm.get('city'),
            zipcode: dataFromForm.get('zipcode'),
            phone: dataFromForm.get('phone'),
            website: dataFromForm.get('website'),
            company: dataFromForm.get('company'),
        }

        users.map(el => {
            if (el.id == id) {
                el.name = newFormObject.name
                el.username = newFormObject.username
                el.email = newFormObject.email
                el.address = newFormObject.address
                el.city = newFormObject.city
                el.zipcode = newFormObject.zipcode
                el.phone = newFormObject.phone
                el.website = newFormObject.website
                el.company = newFormObject.company
            }
        })
    }

    useEffect(() => {
        setTimeout(() => {
            users.map(el => {
                if (id == el.id) {
                    setUser(el)
                }
            })
        }, 1000)
    },)

    if (!user) {
        return <Loader />
    }

    return (
        <div className='container__user_detail'>
            <h2>
                Профиль пользователя {user.username}
            </h2>
            <div className='container__user_detail_card'>
                <div className='container__user_info'>
                    <img src={user.avatar}></img>
                    <h2>
                        {user.name}
                    </h2>
                    <Link to='/users'>
                        <button>
                            Назад к таблице
                        </button>
                    </Link>
                    <Link to='/users'>
                        <button onClick={() => saveUser()}>Сохранить</button>
                    </Link>
                </div>
                <div className='container__user_detail_form'>
                    <form ref={ref} className='user_detail_form' encType='multipart/form-data'>
                        <div className='user_detail_form-left-side'>
                            <p>ID</p>
                            <input type='text' defaultValue={user.id} disabled name='id' />
                            <p>Имя</p>
                            <input type='text' defaultValue={user.name} name='name' />
                            <p>Логин</p>
                            <input type='text' defaultValue={user.username} name='username' />
                            <p>Почта</p>
                            <input type='text' defaultValue={user.email} name='email' />
                            <p>Адрес</p>
                            <input type='text' defaultValue={user.address} name='address' />
                        </div>
                        <div className='user_detail_form-right-side'>
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
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}