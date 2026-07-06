import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'
import tarentoLogo from '../assets/tarento.svg'

function LoginPage() {
  const { currentUser, login } = useAuthStore()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // Redirect if already logged in
  if (currentUser.role === 'admin') {
    return <Navigate to="/" replace />
  } else if (currentUser.role === 'employee') {
    return <Navigate to="/employee" replace />
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!username || !password) {
      setError('Please fill in all fields')
      return
    }

    login(username, password)

    // Check store state after calling login
    // Note: since zustand updates are synchronous, we can check the updated store state immediately
    const updatedUser = useAuthStore.getState().currentUser
    if (!updatedUser.role) {
      setError('Invalid username or password')
    } else if (updatedUser.role === 'admin') {
      navigate('/')
    } else if (updatedUser.role === 'employee') {
      navigate('/client')
    }
  }

  const fillCredentials = (userRole: 'admin' | 'employee') => {
    if (userRole === 'admin') {
      setUsername('admin')
      setPassword('admin@123')
    } else {
      setUsername('employee')
      setPassword('employee@123')
    }
    setError('')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F1F3FF] p-6">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-xl">
        <div className="flex flex-col items-center pb-6">
          <img src={tarentoLogo} alt="Tarento" className="h-12 w-auto object-contain mb-4" />
          <h2 className="text-2xl font-bold text-[#051A3E]">Identity Management</h2>
          <p className="text-sm text-gray-500 mt-1">Sign in to your enterprise account</p>
        </div>

        {error && (
          <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600 border border-red-150">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm outline-none transition focus:border-[#0052CC] focus:bg-white focus:ring-2 focus:ring-[#0052CC]/10"
              placeholder="Enter username"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm outline-none transition focus:border-[#0052CC] focus:bg-white focus:ring-2 focus:ring-[#0052CC]/10"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg bg-[#0052CC] py-3 text-center text-sm font-semibold text-white transition hover:bg-[#003d9b]"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 border-t border-gray-100 pt-6">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
            Quick Fill Demo Accounts
          </p>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => fillCredentials('admin')}
              className="cursor-pointer flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs transition hover:border-[#0052CC] hover:bg-[#F1F3FF]"
            >
              <span className="font-bold text-[#051A3E]">Admin Portal</span>
              <span className="text-gray-400 mt-0.5">Role: Admin</span>
            </button>
            <button
              onClick={() => fillCredentials('employee')}
              className="cursor-pointer flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs transition hover:border-[#0052CC] hover:bg-[#F1F3FF]"
            >
              <span className="font-bold text-[#051A3E]">Employee Card</span>
              <span className="text-gray-400 mt-0.5">Role: Employee</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
