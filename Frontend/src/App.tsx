import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import DirectoryPage from './pages/DirectoryPage.tsx'
import SettingsPage from './pages/SettingsPage.tsx'
import SupportPage from './pages/SupportPage.tsx'
import ThemePage from './pages/ThemePage.tsx'
import VerificationPage from './pages/VerificationPage.tsx'

function App() {
  return (
    <BrowserRouter>
      {/* Keep layout and page responsibilities separated for readability. */}
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<DirectoryPage />} />
          <Route path="/verifi" element={<VerificationPage />} />
          {/* <Route path="/detail" element={<DetailPage />} /> */}
          <Route path="/sett" element={<ThemePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
