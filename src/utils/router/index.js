import { createBrowserRouter } from 'react-router-dom'

// Импортируем страницы приложения

import {MainLayout} from '../../components/main_layout/index.js'
import {Main} from '../../pages/main/index.js'
import Goods from '../../pages/goods/index.js'
import Users from '../../pages/users/index.js'
import Reviews from '../../pages/reviews/index.js'

import {GoodList} from '../../components/good_list/index.js'
import {GoodDetail} from '../../components/good_detail/index.js'
import {AddGood} from '../../pages/goods/add/index.js'


/**
 * Модуль React который определяет маршруты моего приложения
 */

const Router = createBrowserRouter([
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
            },
            {
                path: '/reviews',
                element: <Reviews />,
            },
        ]
    }

])

export default Router