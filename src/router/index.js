import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Life from "../pages/life/Life";
import Shop from "../pages/shop/shop";
import Layout from "../pages/Layout";
import City from "../pages/city/City";
import {Navigate} from 'react-router-dom'
const routes = [
    {
        path: '/',
        element: <Navigate to='/home' />
    },
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:'/home',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/life',
                element:<Life/>
            },
            {
                path:'/shop',
                element:<Shop/>
            },
            {
                path:'/city',
                element:<City/>
            },

        ]
    }
]

export default routes