import React from 'react';

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
                    Меню
                </h1>
                <ul className='menu__list'>
                    {
                    menu.map((menuElement, index) => {
                        // console.log(menuElement)
                        return (
                            <li className='menu__item'>
                                <a className='menu__link' href={menuElement.link}>{menuElement.text}</a>
                            </li>
                            
                        )
                    })
                }
                </ul>
                {/* {
                    menu.map((menuElement, index) => {
                        // console.log(menuElement)
                        return (
                            <a href={menuElement.link}>{menuElement.text}</a>
                        )
                    })
                } */}
            </div>
        )
    }
}

export default Menu