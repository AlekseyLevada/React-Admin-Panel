import React from 'react'
import './style.css'

/**
 * Общая кнопка для компонентов:
 *  - карточка товара
 */

export function Button(props) {
    return(
        <div className='detailBtn'>
                {props.value}
        </div>
    )
}