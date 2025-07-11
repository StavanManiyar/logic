import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProgressProvider } from './contexts/ProgressContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import ScenarioPage from './pages/ScenarioPage';
import ProgressPage from './pages/ProgressPage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
import OnboardingPage from './pages/OnboardingPage';
import GamingPage from './pages/GamingPage';
import LearningPathsPage from './pages/LearningPathsPage';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';


import LogicInput from './components/LogicInput';
import LoadingSpinner from './components/LoadingSpinner';
import { useAuth } from './contexts/AuthContext';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" text="Loading your dashboard..." />
      </div>
    );
  }

  return user ? <>{children}</> : <Navigate to="/login" />;
};

function AppContent() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<AuthPage mode="login" />} />
        <Route path="/register" element={<AuthPage mode="register" />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/gaming" 
          element={
            <ProtectedRoute>
              <GamingPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/scenario/:id" 
          element={
            <ProtectedRoute>
              <ScenarioPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/progress" 
          element={
            <ProtectedRoute>
              <ProgressPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/learning-paths" 
          element={
            <ProtectedRoute>
              <LearningPathsPage />
            </ProtectedRoute>
          } 
        />
        <Route path="/logic-input" element={<LogicInput />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <ProgressProvider>
          <Router>
            <AppContent />
          </Router>
        </ProgressProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;