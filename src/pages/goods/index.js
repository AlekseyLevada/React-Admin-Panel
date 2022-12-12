import React from 'react'
import './style.css'
import { Outlet } from 'react-router-dom'

/**
 * Класс для генерирования страницы приложения 'Товары'
 */

export default class Goods extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <>
                <Outlet/>
            </>
        )
    }
}