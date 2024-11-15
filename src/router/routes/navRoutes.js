import { lazy } from "react"
const Home = lazy(() => import('../../views/pages/Home'))
const PortfolioDetails = lazy(() => import('../../views/pages/PortfolioDetails'))

export const navRoutes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/portfolio/:id',
        element: <PortfolioDetails />
    }
]