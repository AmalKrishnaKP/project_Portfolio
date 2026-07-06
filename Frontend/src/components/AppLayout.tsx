import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#f4f5f7] text-[#191c1e]">
      {/* Sidebar remains fixed so the content area can move independently. */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="lg:ml-[260px] flex min-h-screen flex-col">
        <TopBar onMenuClick={() => setSidebarOpen(true)} />

        <div className="flex-1 p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default AppLayout