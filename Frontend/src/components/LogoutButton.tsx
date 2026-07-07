import { useAuthStore } from "@/store/useAuthStore"
import { LogOut } from "lucide-react"

const LogoutButton = () => {
  const { logout } = useAuthStore()
  return (
    <button
      type="button"
      onClick={logout}
      className="rounded-full p-2 text-[#434654] transition-colors hover:bg-[#f3f4f6]"
      aria-label="Log out"
    >
      <span className="material-symbols-outlined flex items-center justify-center"><LogOut size={20} /></span>
    </button>
  )
}

export default LogoutButton