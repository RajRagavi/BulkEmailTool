import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import IndexPage from './components/IndexPage';
import SendBulkEmail from './components/SendBulkEmail';
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginForm';
import RegisterPage from './components/RegisterForm';

function App() {
  return (
    <Router>
      <div>
       
       

        {/* Main content area */}
        <div style={{  width: '100%' }}>
          <Routes>
            {/* Default route to Index Page */}
            <Route path="/" element={<IndexPage />} />

            {/* Protected Routes */}
            <Route path="/send-bulk-email" element={<SendBulkEmail />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Redirect to home if route not found */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
