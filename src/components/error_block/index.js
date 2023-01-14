import './style.css'
import React from 'react'

/**
 * Компонент для выввода блока с ошибками
 *  
 */

export function ErrorBlock({errorText}) {
    return(
        <div className='error_block'>
            {errorText}
        </div>
    )
}
