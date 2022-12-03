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
            <div className='container__menu'>
                <h1>
                    Меню
                </h1>
                {
                    menu.map((menuElement, index) => {
                        // console.log(menuElement)
                        return (
                            <a href={menuElement.link}>{menuElement.text}</a>
                        )
                    })
                }
            </div>
        )
    }
}

export default Menu