import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import DirectoryPage from './pages/DirectoryPage.tsx'
import SettingsPage from './pages/SettingsPage.tsx'
import SupportPage from './pages/SupportPage.tsx'
import ThemePage from './pages/ThemePage.tsx'
import VerificationPage from './pages/VerificationPage.tsx'
import BusinessCard from './pages/client/BusinessCard.tsx'
import { useAuthStore } from './store/useAuthStore.ts'
import LoginPage from './pages/LoginPage.tsx'


function App() {
  const { currentUser, } = useAuthStore()
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
        <Route path="/client" element={currentUser.role == "employee" ? <BusinessCard /> : <LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
