import './style.css'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import usersJSON from '../../../stub/users.json'

export function AddUser() {

    const ref = useRef()

    const addUser = () => {
        const formDataValues = new FormData(ref.current)
        const newObject = {
            id : Math.ceil(Math.random() * 10000000000),
            name: formDataValues.get('name'),
            username: formDataValues.get('username'),
            email: formDataValues.get('email'),
            address: formDataValues.get('address'),
            city: formDataValues.get('city'),
            zipcode: formDataValues.get('zipcode'),
            phone: formDataValues.get('phone'),
            website: formDataValues.get('website'),
            company: formDataValues.get('company'),
            avatar: formDataValues.get('avatar'),
        }
        usersJSON.push(newObject)
        console.log(usersJSON)
    }

    return (
        <div className='container__users_form_add'>
            <h2>
                Форма для добавления пользователя
            </h2>
            <form ref={ref} className='users_form_add' encType='multipart/form-data'>
                <p>Имя пользователя</p>
                <input type='text' defaultValue='Имя' name='name'/>
                <p>Логин</p>
                <input type='text' defaultValue='Логин' name='username'/>
                <p>Почта</p>
                <input type='text' defaultValue='Почта' name='email'/>
                <p>Адрес</p>
                <input type='text' defaultValue='Адрес' name='address'/>
                <p>Город</p>
                <input type='text' defaultValue='Город' name='city'/>
                <p>Почтовый индекс</p>
                <input type='text' defaultValue='Почтовый индекс' name='zipcode'/>
                <p>Телефон</p>
                <input type='text' defaultValue='Телефон' name='phone'/>
                <p>Вебсайт</p>
                <input type='text' defaultValue='Вебсайт'name='website'/>
                <p>Место работы</p>
                <input type='text' defaultValue='Место работы' name='company'/>
                <p>Аватар</p>
                <input type='file' name='avatar'/>
                <Link to='/users'>
                    <button onClick={()=> addUser()}>
                        Добавить
                    </button>
                </Link>
            </form>
        </div>

    )
}