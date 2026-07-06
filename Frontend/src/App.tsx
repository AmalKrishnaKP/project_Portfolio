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
      {/* Keep layout and page responsibilities separated for readability. */}
      <Routes>
        <Route element={currentUser.role != "" && <AppLayout />}>
          <Route path="/" element={currentUser.role == "admin" ? <DirectoryPage /> : <LoginPage />} />
          <Route path="/verifi" element={currentUser.role == "admin" ? <VerificationPage /> : <LoginPage />} />
          {/* <Route path="/detail" element={<DetailPage />} /> */}
          <Route path="/sett" element={currentUser.role == "admin" ? <ThemePage /> : <LoginPage />} />
          <Route path="/settings" element={currentUser.role == "admin" ? <SettingsPage /> : <LoginPage />} />
          <Route path="/support" element={currentUser.role == "admin" ? <SupportPage /> : <LoginPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
        <Route path="/client" element={<BusinessCard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
