import { createBrowserRouter } from 'react-router-dom'

// Импортируем страницы приложения для отображения на определенных маршрутах

import MainLayout from '../../components/main_layout/index.js'
import Main from '../../pages/main/index.js'
import Goods from '../../pages/goods/index.js'
import Users from '../../pages/users/index.js'
import Reviews from '../../pages/reviews/index.js'


//Роутинг приложения (path - путь в строке блаузера, element - компонент который отображается)

const Router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Main />,
            },

            {
                path: '/goods',
                element: <Goods />,
            },

            {
                path: '/users',
                element: <Users />,
            },

            {
                path: '/reviews',
                element: <Reviews />,
            },
        ]
    }

])

export default Router