import { lazy } from "react"
const Home = lazy(() => import('../../views/pages/Home'))
const Details = lazy(() => import('../../views/pages/Details'))

export const navRoutes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/details',
        element: <Details />
    }
]