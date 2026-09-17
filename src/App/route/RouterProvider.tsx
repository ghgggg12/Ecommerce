import { createBrowserRouter } from 'react-router'
import { Layouts } from '@/App/layouts/HeaderLayout'
import { Blog } from '@widgets/Blog/Blog'

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Layouts />,
        children: [
            { path: 'blog', element: <Blog /> },
        ],
    }
])