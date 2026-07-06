type ThemePreviewProps = {
  primary: string
  secondary: string
  surface: string
  header: string
  text: string
}

function ThemePreview({ primary, secondary, surface, header, text }: ThemePreviewProps) {
  return (
    <div className="flex min-h-[500px] items-center justify-center rounded-xl border border-[#dfe1e6] p-6" style={{ backgroundColor: surface }}>
      {/* This card mirrors the live preview block from the prototype. */}
      <div className="theme-preview-card w-full max-w-sm overflow-hidden rounded-2xl border border-[#dfe1e6] bg-white shadow-2xl">
        <div className="h-3" style={{ backgroundColor: header }} />
        <div className="space-y-6 p-6">
          <div className="flex justify-center">
            <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-[#e7e8ea] shadow-lg" />
          </div>
          <div className="space-y-1 text-center">
            <h4 className="text-[20px] font-semibold" style={{ color: text }}>
              Ananya Singh
            </h4>
            <p className="text-xs opacity-70" style={{ color: text }}>
              Software Engineer
            </p>
          </div>
          <div className="flex justify-center">
            <span className="rounded-full px-3 py-1 text-[10px] font-bold uppercase" style={{ color: secondary, backgroundColor: `${secondary}1A` }}>
              Verified
            </span>
          </div>
          <button className="w-full rounded-lg px-4 py-2.5 text-white shadow-sm" style={{ backgroundColor: primary }}>
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  )
}

export default ThemePreview