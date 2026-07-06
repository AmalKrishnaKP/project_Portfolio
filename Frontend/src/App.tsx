import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout.tsx'
import DirectoryPage from './pages/admin/DirectoryPage.tsx'
import SettingsPage from './pages/SettingsPage.tsx'
import SupportPage from './pages/SupportPage.tsx'
import ThemePage from './pages/ThemePage.tsx'
import VerificationPage from './pages/VerificationPage.tsx'
import BusinessCard from './pages/client/BusinessCard.tsx'
import { useAuthStore } from './store/useAuthStore.ts'
import LoginPage from './pages/LoginPage.tsx'


function App() {
  const { currentUser } = useAuthStore()

  // Load and apply saved theme colors on app mount
  useEffect(() => {
    const primary = localStorage.getItem('theme-primary') || '#003d9b'
    const secondary = localStorage.getItem('theme-secondary') || '#36B37E'
    const surface = localStorage.getItem('theme-surface') || '#f8f9fb'
    const header = localStorage.getItem('theme-header') || '#edeef0'
    const text = localStorage.getItem('theme-text') || '#172B4D'

    document.documentElement.style.setProperty('--primary-color', primary)
    document.documentElement.style.setProperty('--secondary-color', secondary)
    document.documentElement.style.setProperty('--surface-color', surface)
    document.documentElement.style.setProperty('--header-color', header)
    document.documentElement.style.setProperty('--text-color', text)
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        {/* Public/Login Route */}
        <Route
          path="/login"
          element={
            currentUser.role === 'admin' ? (
              <Navigate to="/" replace />
            ) : currentUser.role === 'employee' ? (
              <Navigate to="/client" replace />
            ) : (
              <LoginPage />
            )
          }
        />

        {/* Admin protected routes */}
        <Route
          element={
            currentUser.role === 'admin' ? (
              <AppLayout />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        >
          <Route path="/" element={<DirectoryPage />} />
          <Route path="/verifi" element={<VerificationPage />} />
          <Route path="/sett" element={<ThemePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Route>

        {/* Employee protected route */}
        <Route
          path="/client"
          element={
            currentUser.role === 'employee' ? (
              <BusinessCard />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Fallback route */}
        <Route
          path="*"
          element={
            <Navigate
              to={
                currentUser.role === 'admin'
                  ? '/'
                  : currentUser.role === 'employee'
                  ? '/client'
                  : '/login'
              }
              replace
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
