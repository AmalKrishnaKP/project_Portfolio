import { useState } from "react"
import { useEmployeeStore } from "../store/useEmployeeStore"

type RequestRow = {
  id: string
  employee: string
  employeeId: string
  requestType: string
  status: 'Pending' | 'Verified'
}

type VerificationTableProps = {
  rows: RequestRow[]
  onVerify?: (id: string) => void
}

function VerificationTable({ rows, onVerify }: VerificationTableProps) {
  const { employees } = useEmployeeStore()
  const [verific, setVerif] = useState(false)
  const [veriUser, setVeriUser] = useState<RequestRow>({
    id: "",
    employee: "",
    employeeId: "",
    requestType: "",
    status: 'Pending'
  })

  const verFun = (row: RequestRow) => {
    setVerif(true)
    setVeriUser(row)
  }

  if (verific) {
    const activeEmployee = employees.find(emp => emp.id === veriUser.id)
    const currentAboutMe = activeEmployee?.currentAboutMe || 'Highly motivated individual focused on delivering quality results through collaborative teamwork and innovation.'
    const currentSkills = activeEmployee?.currentSkills || ['Project Management', 'Strategy']
    const requestedAboutMe = activeEmployee?.requestedAboutMe || 'Lead Product Manager with over 8 years of experience in scaling SaaS platforms. Passionate about user-centric design and data-driven decision making. Spearheaded the 2023 Enterprise Growth initiative.'
    const requestedSkills = activeEmployee?.requestedSkills || ['SaaS Growth', 'Agile Leadership', 'Project Management', 'Strategy']
    const changesCount = activeEmployee?.changesCount || 2

    return (
      <section className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center gap-4">
          <button
            type="button"
            onClick={() => setVerif(false)}
            className="rounded-full p-2 transition-colors hover:bg-[#e7e8ea]"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          <div>
            <h1 className="text-[24px] font-semibold tracking-[-0.02em] text-[#172B4D] md:text-[28px]">
              Review Update: <span>{veriUser.employee}</span>
            </h1>
            <p className="text-sm text-[#6B778C]">Compare requested changes against the current profile state.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-semibold uppercase tracking-[0.05em] text-[#6B778C]">Current Profile</span>
            </div>
            <div className="rounded-xl border border-[#dfe1e6] bg-[#f3f4f6] p-8 opacity-60">
              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-[11px] font-bold uppercase text-[#6B778C]">About Me</label>
                  <p className="text-[14px] leading-relaxed text-[#172B4D]">
                    {currentAboutMe}
                  </p>
                </div>
                <div>
                  <label className="mb-2 block text-[11px] font-bold uppercase text-[#6B778C]">Key Skills</label>
                  <div className="flex flex-wrap gap-2">
                    {currentSkills.map((skill) => (
                      <span key={skill} className="rounded-full border border-[#dfe1e6] bg-white px-3 py-1 text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-semibold uppercase tracking-[0.05em] text-[#003d9b]">Requested Changes</span>
              <span className="flex items-center gap-1 text-xs font-bold text-[#36B37E]">
                <span className="material-symbols-outlined text-[14px]" data-weight="fill">
                  update
                </span>
                {changesCount} Changes
              </span>
            </div>
            <div className="rounded-xl border-2 border-[#003d9b] bg-white p-8 shadow-xl">
              <div className="space-y-6">
                <div className="-mx-4 rounded bg-[#003d9b]/5 px-4 py-2">
                  <label className="mb-2 block text-[11px] font-bold uppercase text-[#003d9b]">About Me</label>
                  <p className="text-[14px] font-medium leading-relaxed text-[#172B4D]">
                    {requestedAboutMe}
                  </p>
                </div>
                <div className="-mx-4 rounded bg-[#003d9b]/5 px-4 py-2">
                  <label className="mb-2 block text-[11px] font-bold uppercase text-[#003d9b]">Key Skills</label>
                  <div className="flex flex-wrap gap-2">
                    {requestedSkills.map((skill) => {
                      const isNew = !currentSkills.includes(skill);
                      return (
                        <span
                          key={skill}
                          className={[
                            'rounded-full px-3 py-1 text-xs',
                            isNew
                              ? 'border border-[#003d9b] bg-white font-semibold text-[#003d9b]'
                              : 'border border-[#dfe1e6] bg-white',
                          ].join(' ')}
                        >
                          {skill}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center border-t border-[#dfe1e6] pt-8">
          <button
            type="button"
            onClick={() => {
              onVerify?.(veriUser.id)
              setVerif(false)
            }}
            className="flex items-center gap-3 rounded-xl bg-[#003d9b] px-12 py-4 text-[16px] font-semibold text-white shadow-2xl transition-all hover:scale-[1.02] hover:bg-[#0052cc] active:scale-95"
          >
            <span className="material-symbols-outlined" data-weight="fill">
              verified
            </span>
            Verify &amp; Update Profile
          </button>
        </div>
      </section>
    )
  }

  return (
    <div className="overflow-hidden rounded-xl border border-[#dfe1e6] bg-white shadow-sm">
      <table className="w-full border-collapse text-left">
        <thead className="border-b border-[#dfe1e6] bg-[#f3f4f6]">
          <tr>
            <th className="px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.05em] text-[#6B778C]">Employee</th>
            <th className="px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.05em] text-[#6B778C]">Request Type</th>
            <th className="px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.05em] text-[#6B778C]">Status</th>
            <th className="px-6 py-4 text-right text-[12px] font-semibold uppercase tracking-[0.05em] text-[#6B778C]">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#dfe1e6]">
          {rows.map((row) => {
            const activeEmployeeForTable = employees.find(emp => emp.id === row.id)
            return (
              <tr key={row.id} className="transition-colors hover:bg-[#f8f9fb]">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-full border border-[#dfe1e6] bg-[#e7e8ea]">
                      {activeEmployeeForTable?.image && (
                        <img src={activeEmployeeForTable.image} alt={row.employee} className="h-full w-full object-cover" />
                      )}
                    </div>
                    <div>
                      <div className="text-[16px] font-semibold text-[#172B4D]">{row.employee}</div>
                      <div className="text-xs text-[#6B778C]">ID: {row.employeeId}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-[14px] text-[#191c1e]">{row.requestType}</td>
                <td className="px-6 py-4">
                  <span
                    className={[
                      'rounded px-2 py-1 text-[10px] font-bold uppercase',
                      row.status === 'Verified' ? 'bg-[#36B37E]/10 text-[#36B37E]' : 'bg-[#FFAB00]/10 text-[#FFAB00]',
                    ].join(' ')}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    type="button"
                    disabled={row.status === 'Verified'}
                    onClick={() => verFun(row)}
                    className={[
                      'rounded px-4 py-1.5 text-[12px] font-semibold transition-colors',
                      row.status === 'Verified'
                        ? 'cursor-not-allowed bg-[#003d9b] text-white opacity-50'
                        : 'bg-[#003d9b] text-white hover:bg-[#0052cc]',
                    ].join(' ')}
                  >
                    {row.status === 'Verified' ? 'Completed' : 'Verify'}
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default VerificationTable