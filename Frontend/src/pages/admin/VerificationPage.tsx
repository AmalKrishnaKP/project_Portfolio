import { useState } from 'react'
import { Link } from 'react-router-dom'
import Toast from '@/components/common/Toast'
import VerificationTable from '@/components/admin/VerificationTable'
import { useEmployeeStore } from '@/store/useEmployeeStore'

function VerificationPage() {
  const { employees, verifyEmployee } = useEmployeeStore()
  const [toastMessage, setToastMessage] = useState('')

  const rows = employees
    .filter((emp) => emp.requestType !== undefined)
    .map((emp) => ({
      id: emp.id,
      employee: emp.name,
      employeeId: emp.employeeId || emp.id,
      requestType: emp.requestType || '',
      status: emp.status,
    }))

  function verifyRow(id: string) {
    verifyEmployee(id)
    setToastMessage('Updated successfully')
    window.setTimeout(() => setToastMessage(''), 2000)
  }

  return (
    <section className="space-y-8">
      <div className="flex items-center gap-4">
        <Link to="/" className="rounded-full p-2 transition-colors hover:bg-[#e7e8ea]">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <div>
          <h1 className="text-[24px] font-semibold tracking-[-0.02em] text-[#172B4D] md:text-[28px]">Verification Requests</h1>
          <p className="text-sm text-[#6B778C]">Review and approve profile updates submitted by employees.</p>
        </div>
      </div>

      <VerificationTable rows={rows} onVerify={verifyRow} />

      {toastMessage ? <Toast message={toastMessage} /> : null}
    </section>
  )
}

export default VerificationPage