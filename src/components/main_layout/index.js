import '../main_layout/style.css'
import React, { useState } from 'react'

import { Menu } from '../menu/index.js'

// Импорт механизма роутер {Outlet} дома для отображения дочерних елементов компонента MainLayout

import { Outlet } from 'react-router-dom'

export function MainLayout() {
  const [menu, setMenu] = useState([
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
  ])

  return (
    <div className='main__layout'>
      <Menu menu={menu} />
      <Outlet />
    </div>
  )
}