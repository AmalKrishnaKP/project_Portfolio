type EmployeeCardProps = {
  name: string
  role: string
  department: string
  status: 'Verified' | 'Pending'
  image: string
  onEdit?: () => void
}

function EmployeeCard({ name, role, department, status, image, onEdit }: EmployeeCardProps) {
  const isVerified = status === 'Verified'

  return (
    <article className="group rounded-xl border border-[#dfe1e6] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className={['h-16 w-16 overflow-hidden rounded-full border-2', isVerified ? 'border-[#dae2ff]' : 'border-[#c3c6d6]'].join(' ')}>
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>
        <span
          className={[
            'rounded px-2 py-1 text-[10px] font-bold uppercase tracking-tight',
            isVerified ? 'bg-[#36B37E]/10 text-[#36B37E]' : 'bg-[#FFAB00]/10 text-[#FFAB00]',
          ].join(' ')}
        >
          {status}
        </span>
      </div>

      <h3 className="mb-1 text-[16px] font-semibold text-[#172B4D]">{name}</h3>
      <p className="mb-3 text-[12px] font-semibold text-[#003d9b]">{role}</p>

      <div className="mb-6 flex items-center gap-2 text-[#6B778C]">
        <span className="material-symbols-outlined text-[18px]">corporate_fare</span>
        <span className="text-sm">{department}</span>
      </div>

      <div className="border-t border-[#dfe1e6] pt-4">
        <button
          type="button"
          onClick={onEdit}
          className="w-full rounded bg-[#f3f4f6] py-2 text-[12px] font-semibold text-[#191c1e] transition-colors hover:bg-[#e7e8ea]"
        >
          Edit
        </button>
      </div>
    </article>
  )
}

export default EmployeeCard