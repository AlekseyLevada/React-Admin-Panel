import './style.css'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { MenuItemShape } from '../../shapes/MenuItemShape'

/**
 * Компонент для генерирования компонента 'Menu' приложения 
 */

export function Menu(props) {
    const { menu } = props

    return (
        <div className='container__menu menu'>
            <h2>
                Меню
            </h2>
            <ul className='menu__list'>
                {
                    menu.map((menuElement, index) => {
                        return (
                            <li className='menu__item' key={index}>
                                <Link className='menu__link' to={menuElement.link}>
                                    {menuElement.text}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

// Проверка входящих в компонент типов
Menu.propTypes = {
    menu: PropTypes.arrayOf(
        MenuItemShape
    )
}