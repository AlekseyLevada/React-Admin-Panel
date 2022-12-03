import React from 'react';
import './App.css';
import Menu from './components/menu'

// Импортируем роутер провайдер
import { RouterProvider } from 'react-router-dom'

import Router from './utils/router';

class App extends React.Component {
  constructor() {
    super()
    // Состояния компонента state, определяется только в конструкторе
    this.state = {
      menu:[
        {
          text:'Главная',
          link:'/',
        },
        {
          text:'Товары',
          link:'/goods',
        },
      ]
    }
  }

  render() {
    return(
      <div className = "App" >
        <Menu menu = {this.state.menu}/>
    <RouterProvider router={Router}/>
      </div>
    );
  } 
}

export default App;
