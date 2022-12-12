import '../main_layout/style.css'
import React from 'react'

import Menu from '../menu/index.js'

// Импортируем механизм роутер дома
import { Outlet } from 'react-router-dom'

export default class MainLayout extends React.Component {
  constructor() {
    super()
    this.state = {
      menu: [
        {
          text: 'Главная',
          link: '/',
        },
        {
          text: 'Товары',
          link: '/goods',
        },
        {
          text: 'Пользователи',
          link: '/users',
        },
        {
          text: 'Отзывы',
          link: '/reviews',
        },
      ]
    }
  }

  render() {
    return (
      <div className='main__layout'>
        <Menu menu={this.state.menu} />
        <Outlet />
      </div>
    )
  }
}