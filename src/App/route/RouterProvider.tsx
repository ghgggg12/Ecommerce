import { createBrowserRouter } from 'react-router'
import { LayoutMain } from '@App/layouts/HeaderLayout'
import { Air } from '@widgets/Air/Air'
import { Error } from '@widgets/Error/index'
import { Main } from '@App/Main/index'

export const Routes = createBrowserRouter(
  [
    {
      path: '/',
      element: <LayoutMain />,
      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: 'collection',
          element: <Air />,
        },
        {
          path: 'contact',
          element: <Air />,
        },
        {
          path: 'about',
          element: <Air />,
        },
        {
          path: 'login',
          element: <Air />,
        },
        {
          path: 'like',
          element: <Air />,
        },
        {
          path: 'search',
          element: <Air />,
        },
        {
          path: 'basket',
          element: <Air />,
        },
        {
          path: 'checkout',
          element: <Air />,
        },
        {
          path: 'product/:id',
          element: <Air />,
        },
        {
          path: '*',
          element: <Error />,
        },
      ],
    },
  ],
  {
    basename: '/Ecommerce',
  }
)