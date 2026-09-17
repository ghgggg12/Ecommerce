import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { Routes } from './App/route/RouterProvider';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min.js';
import 'uikit/dist/js/uikit-icons.min.js';
import '@shared/styles/global.css'

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={Routes} />
)