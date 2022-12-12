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
                <h2>
                    Отзывы
                </h2>
            </div>
        )
    }
}
 export default Reviews