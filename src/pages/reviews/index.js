import React from 'react'
import './style.css'

/**
 * Класс для генерирования страницы приложения 'Отзывы'
 */

class Reviews extends React.Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div className='container__reviews'>
                <h1>
                    Отзывы
                </h1>
            </div>
        )
    }
}
 export default Reviews