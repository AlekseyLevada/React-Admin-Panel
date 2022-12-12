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
                <h2>
                    Пользователи
                </h2>
            </div>
        )
    }
}

export default Users