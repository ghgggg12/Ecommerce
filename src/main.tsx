import { createRoot } from 'react-dom/client';
import { App } from './App/App';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min.js';
import 'uikit/dist/js/uikit-icons.min.js';
import '@shared/styles/global.css'

UIkit.use(Icons);

createRoot(document.getElementById('root')!).render(
  <App />
)