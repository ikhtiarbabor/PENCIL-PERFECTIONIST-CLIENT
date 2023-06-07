import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AuthProvider from './Providers/AuthContext/AuthProvider.jsx';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider />
    </AuthProvider>
  </React.StrictMode>
);
