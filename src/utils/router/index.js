import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

// Импортируем страницы приложения для отображения на определенных маршрутах

import Main from '../../pages/main'
import Goods from '../../pages/goods'

//Роутинг приложения (path - путь в строке блаузера, element - компонент который отображается)
const Router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
    },
    {
        path:'/goods',
        element: <Goods/>,
    },
])

export default Router

