// Импотрируем реакт

import React from 'react';

class Menu extends React.Component {
    constructor() {
        super()
    }

    render() {
        const { menu } = this.props
        // Вывести элементы н верстку

        return (
            <div>
                <h1>
                    Menu
                </h1>
                {
                    menu.map((menuElement, index) => {
                        console.log(menuElement)
                        return(
                            <a href={menuElement.link}>{menuElement.text}</a>
                        )
                    })
                }
            </div>
        )
    }
}

export default Menu