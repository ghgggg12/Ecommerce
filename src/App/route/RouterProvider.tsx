import { createBrowserRouter } from 'react-router'
import { LayoutMain } from '../layouts/HeaderLayout'
import { Air } from '@widgets/Air/Air'
import { Slider } from '@widgets/Slider/Slider';

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <LayoutMain />,
        children: [
            { path: '/', element: <Slider /> },
            { path: 'collection', element: <Air /> },
            { path: 'contact', element: <Air /> },
            { path: 'about', element: <Air /> },
            { path: 'login', element: <Air /> },
            { path: 'like', element: <Air /> },
            { path: 'search', element: <Air /> },
            { path: 'busket', element: <Air /> },
        ],
    },
])