import { NavLink } from 'react-router-dom'
import tarentoLogo from '../assets/tarento.svg'

type SidebarItem = {
  to: string
  label: string
  icon: string
  exact?: boolean
}

const primaryItems: SidebarItem[] = [
  { to: '/', label: 'Employee Directory', icon: 'group', exact: true },
  { to: '/verifi', label: 'Verification Requests', icon: 'verified_user' },
  { to: '/sett', label: 'Theme Settings', icon: 'palette' },
  { to: '/dep', label: 'Departments', icon: 'business' },
  { to: '/sys', label: 'System Logs', icon: 'terminal' },
]

const footerItems: SidebarItem[] = [
  { to: '/settings', label: 'Settings', icon: 'settings' },
  { to: '/support', label: 'Support', icon: 'contact_support' },
]

function navClassName(isActive: boolean) {
  return [
    'flex items-center px-3 py-2.5 transition-all duration-150',
    isActive ? 'border-l-4 border-[#003d9b] bg-[#d9e2ff] text-[#00419d]' : 'text-[#434654] hover:bg-[#e7e8ea]',
  ].join(' ')
}

type SidebarProps = {
  isOpen: boolean
  onClose: () => void
}

function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Backdrop overlay for mobile screens */}
      {isOpen && (
        <div
          className="fixed inset-0 z-45 bg-[#191c1e]/40 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      <aside
        className={[
          'fixed left-0 top-0 z-50 flex h-full w-[260px] flex-col border-r border-[#dfe1e6] bg-white py-4 transition-transform duration-300 ease-in-out lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        ].join(' ')}
      >
        <div className="flex items-center justify-between px-6 pb-6">
          <img src={tarentoLogo} alt="Tarento" className="h-10 w-auto max-w-full object-contain" />
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1 text-[#6B778C] hover:bg-[#f3f4f6] lg:hidden"
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined block">close</span>
          </button>
        </div>

        <nav className="flex-1 space-y-1 px-3">
          {primaryItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.exact}
              onClick={onClose}
              className={({ isActive }) => navClassName(isActive)}
            >
              <span className="material-symbols-outlined mr-3">{item.icon}</span>
              <span className="text-[12px] font-semibold tracking-[0.05em]">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-4 border-t border-[#dfe1e6] px-3 pt-4">
          {footerItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              onClick={onClose}
              className={({ isActive }) => navClassName(isActive)}
            >
              <span className="material-symbols-outlined mr-3">{item.icon}</span>
              <span className="text-[12px] font-semibold tracking-[0.05em]">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </aside>
    </>
  )
}

export default Sidebar