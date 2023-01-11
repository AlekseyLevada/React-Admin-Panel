import './style.css'
import React, { useState, useEffect } from 'react'
import { Loader } from '../loader/index.js'
import { UserItem } from '../user_item/index.js'
import { Link } from 'react-router-dom'
import usersJSON from '../../stub/users.json'


export function UserList() {

    const [isLoading, setIsLoading] = useState(true)
    const [users, setUsers] = useState(usersJSON)
    const [selected, setSelected] = useState([])

    const deleteUser = (id) => {
        const filteredUsersArray = []
        users.map(el => {
            if (el.id !== id) {
                filteredUsersArray.push(el)
            }
            setUsers(filteredUsersArray)
        })
    }

    const deleteSelected = (e) => {
        e.preventDefault()
        const currentGoods = users
        for (let i = currentGoods.length - 1; i >= 0; i--) {
            for (let k = 0; k < selected.length; k++) {
                if (currentGoods[i] && currentGoods[i].id === selected[k].id) {
                    currentGoods.splice(i, 1)
                }
            }
        }
        setSelected([])
        setUsers([...currentGoods])
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
                <button onClick={(e) => deleteSelected(e)}>Удалить {selected.length} пользователей</button>

                <Link to='/users/add'>
                    <button>Добавить пользователя</button>
                </Link>
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
                            return <UserItem key={el.id} data={el} deleteUser={deleteUser} selected={selected} setSelected={setSelected} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}