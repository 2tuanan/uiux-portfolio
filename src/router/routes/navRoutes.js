import { lazy } from "react"
const Home = lazy(() => import('../../views/pages/Home'))

export const navRoutes = [
    {
        path: '/',
        element: <Home />
    }
]