import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './ProtectedRoute';
import './App.css'

function App() {
  const isAuthenticated = false; // Simulate authentication status
  

  return (
    <Router>
      <Routes>
        <Route 
          path="/profile/*" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          } 
        />
        <Route path="/blog/:Id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
};

export default App;
