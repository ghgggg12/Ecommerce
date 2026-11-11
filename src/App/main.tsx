import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router'
import { App } from './App';
import '@shared/styles/global.css'
import '@shared/styles/vars.css'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter basename="/Ecommerce">
        <App />
    </BrowserRouter>
)