// Импортируем HashRouter для корректной работы роутера на GitHub Pages
// Для работы приложения на другом хостинге оставить createBrowserRouter

import { createBrowserRouter, createHashRouter} from 'react-router-dom'

// Импортируем страницы приложения

import { MainLayout } from '../../components/main_layout/index.js'
import { Main } from '../../pages/main/index.js'
import { Goods } from '../../pages/goods/index.js'
import { Users } from '../../pages/users/index.js'
import { Reviews } from '../../pages/reviews/index.js'

import { GoodList } from '../../components/good_list/index.js'
import { GoodDetail } from '../../components/good_detail/index.js'
import { AddGood } from '../../pages/goods/add/index.js'
import { UserList } from '../../components/user_list/index.js'
import { UserDetail } from '../../components/user_detail/index.js'
import { AddUser } from '../../pages/users/add/index.js'


/**
 * Модуль React который определяет маршруты моего приложения
 */

const Router = createHashRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Main />
            },
            {
                path: '/goods',
                element: <Goods />,
                children: [
                    {
                        index: true,
                        element: <GoodList />
                    },
                    {
                        path: '/goods/:id',
                        element: <GoodDetail />
                    },
                    {
                        path: '/goods/add',
                        element: <AddGood />
                    },
                ]
            },
            {
                path: '/users',
                element: <Users />,
                children: [
                    {
                        index: true,
                        element: <UserList />
                    },
                    {
                        path: '/users/:id',
                        element: <UserDetail />
                    },
                    {
                        path: '/users/add',
                        element: <AddUser />
                    },
                ]
            },
            {
                path: '/reviews',
                element: <Reviews />,
            },
        ]
    }

])

export default Router