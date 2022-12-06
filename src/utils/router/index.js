import { createBrowserRouter} from 'react-router-dom'

// Импортируем страницы приложения для отображения на определенных маршрутах

import Main from '../../pages/Main'
import Goods from '../../pages/Goods'
import Users from '../../pages/Users'
import Reviews from '../../pages/Reviews'


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