type ToastProps = {
  message: string
  icon?: string
}

function Toast({ message, icon = 'check_circle' }: ToastProps) {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex items-center gap-3 rounded-lg bg-[#191c1e] px-6 py-3 text-white shadow-2xl">
      <span className="material-symbols-outlined text-[#36B37E]">{icon}</span>
      <span>{message}</span>
    </div>
  )
}

export default Toast