import React from 'react'
import propTypes from 'prop-types'
import './style.css'

import { MenuItemShape } from '../../shapes/MenuItemShape'

/**
 * Класс для генерирования компонента 'Меню' приложения 
 */

class Menu extends React.Component {
    constructor() {
        super()
    }

    render() {
        const { menu } = this.props
        // Вывести элементы на верстку
        return (
            <div className='container__menu menu'>
                <h1 className='menu__title'>
                    {/* Меню */}
                </h1>
                <ul className='menu__list'>
                    {
                    menu.map((menuElement, index) => {
                        // console.log(menuElement)
                        return (
                            <a className='menu__link' href={menuElement.link} key={index}>
                                <li className='menu__item'>{menuElement.text}</li> 
                            </a>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}

// Проверка входящих в компонент типов
Menu.propTypes = {
    menu: propTypes.arrayOf(
        MenuItemShape
    )
}

export default Menu