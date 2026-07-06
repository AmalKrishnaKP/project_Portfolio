import { LogOut } from "lucide-react"

type TopBarProps = {
  onMenuClick: () => void
}

function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-[#dfe1e6] bg-white px-6 shadow-sm lg:px-8">
      <div className="flex flex-1 items-center gap-4">
        {/* Burger menu button act as logo/trigger on mobile */}
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-full p-2 text-[#434654] transition-colors hover:bg-[#f3f4f6] lg:hidden"
          aria-label="Open menu"
        >
          <span className="material-symbols-outlined block">menu</span>
        </button>

        <div className="relative w-full max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#737685]">
            search
          </span>
          <input
            type="search"
            aria-label="Search"
            placeholder="Search employees, IDs, or departments..."
            className="w-full rounded-lg border-none bg-[#f3f4f6] py-2 pl-10 pr-4 text-[14px] outline-none focus:ring-2 focus:ring-[#003d9b]/20"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button type="button" className="rounded-full p-2 text-[#434654] transition-colors hover:bg-[#f3f4f6]">
          <span className="material-symbols-outlined"><span><LogOut /></span></span>
        </button>
        {/* <button type="button" className="rounded-full p-2 text-[#434654] transition-colors hover:bg-[#f3f4f6]">
          <span className="material-symbols-outlined">help</span>
        </button> */}
        <div className="h-8 w-8 overflow-hidden rounded-full border border-[#dfe1e6] bg-[#e7e8ea]" />
      </div>
    </header>
  )
}

export default TopBar