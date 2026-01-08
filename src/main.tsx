import ReactDOM from 'react-dom/client';
import App from './App';
import AppTheme from '../shared-theme/AppTheme'; 
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppTheme>
    <CssBaseline />
    <App />
  </AppTheme>
);

