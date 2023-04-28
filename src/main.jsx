import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import "bulma/css/bulma.min.css";
import { UserProvider } from './context/UserContext.jsx';
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
    </StrictMode>
);
