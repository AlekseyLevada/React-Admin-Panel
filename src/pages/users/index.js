import React from 'react'
import './style.css'

/**
 * Класс для генерирования страницы приложения 'Пользователи'
 */

class Users extends React.Component {
    constructor() {
        super()
    }
    
    render() {
        return(
            <div className='container__users'>
                <h1>
                    Пользователи
                </h1>
            </div>
        )
    }
}

export default Users