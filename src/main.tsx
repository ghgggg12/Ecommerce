import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { Routes } from './App/route/RouterProvider'

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={Routes} />
)