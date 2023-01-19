import './style.css'
import React,  { useEffect, useState } from 'react'
import { Loader } from '../../components/loader'

export function Main() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect( () => {
        setTimeout( () => {
            setIsLoading(false)
        }, 1000)
    }, [])

    if(isLoading){
        return <Loader/>
    }

    return (
        <div className='container__main_page'>
            <h1>
                Административная панель интернет магазина
            </h1>
        </div>
    )
}
