import React from 'react';
import './App.css';
import Menu from './components/menu'

// Импортируем роутер провайдер
import { RouterProvider } from 'react-router-dom'

// Импортируем роутер
import Router from './utils/router'

/**
 * Класс для генерирования Главной страницы приложения
 */

class App extends React.Component {
  constructor() {
    super()
    // Состояния компонента state, определяется только в конструкторе
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
      <div className="App" >
        <Menu menu={this.state.menu} />
        <RouterProvider router={Router} />
      </div>
    );
  }
}

export default App;