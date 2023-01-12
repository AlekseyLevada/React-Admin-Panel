import './style.css'
import React, {useEffect, useState} from 'react'

import { Loader } from '../../components/loader'

/**
 * Компонент для генерирования страницы приложения 'Отзывы'
 */

export function Reviews() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        setTimeout(()=> {
            setIsLoading(false)
        }, 1000)
    },[])

    if (isLoading) {
        return <Loader/>
    }
    return (
        <div className='container__reviews'>
            <h2>
                Отзывы
            </h2>
        </div>
    )
}