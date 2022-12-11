import React from 'react'
import './App.css'

// Импортируем сам роутер
import Router from './utils/router'

// Импортируем роутер провайдер без которого роутер не будет передавать данные
import { RouterProvider } from 'react-router-dom'

/**
 * Класс для генерирования Главной страницы приложения
 */

export default class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        <RouterProvider router={Router}/>
      </div>
    );
  }
}