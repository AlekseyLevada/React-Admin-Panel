import { createBrowserRouter} from 'react-router-dom'

// Импортируем страницы приложения для отображения на определенных маршрутах

import Main from '../../pages/main'
import Goods from '../../pages/goods'
import Users from '../../pages/users'
import Reviews from '../../pages/reviews'


//Роутинг приложения (path - путь в строке блаузера, element - компонент который отображается)
const Router = createBrowserRouter([
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
])

export default Router