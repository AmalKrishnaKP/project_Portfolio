import { useState } from 'react'
import EditModal from '../components/EditModal'
import EmployeeCard from '../components/EmployeeCard'
import { useEmployeeStore } from '../store/useEmployeeStore'
import { Link } from 'react-router-dom'

function DirectoryPage() {
  const { employees, updateEmployee } = useEmployeeStore()
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<string | null>(null)
  const [selectedDept, setSelectedDept] = useState<string>('All')

  const selectedEmployee = employees.find((emp) => emp.id === selectedEmployeeId) || employees[0]

  function handleUpdateEmployee(values: { name: string; role: string; department: string }) {
    if (selectedEmployee) {
      updateEmployee(selectedEmployee.id, values)
    }
  }

  const pendingCount = employees.filter((emp) => emp.status === 'Pending').length

  const departments = ['All', ...Array.from(new Set(employees.map(emp => emp.department).filter(Boolean)))]

  const filteredEmployees = selectedDept === 'All'
    ? employees
    : employees.filter(emp => emp.department === selectedDept)

  return (
    <section className="space-y-8">
      <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <h1 className="text-[24px] font-semibold tracking-[-0.02em] text-[#172B4D] md:text-[28px]">Employee Directory</h1>
          <p className="text-sm text-[#6B778C]">Manage and view all registered personnel within the organization.</p>
        </div>

        <Link to="/verifi">
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-[#003d9b] px-5 py-2.5 text-[12px] font-semibold text-white shadow-lg shadow-[#003d9b]/20 transition-all hover:scale-[1.02] active:scale-95"
          >
            <span className="material-symbols-outlined">pending_actions</span>
            Pending Verify
            <span className="rounded-full bg-[#FF5630] px-1.5 py-0.5 text-[10px]" id="badge-count">
              {pendingCount}
            </span>
          </button>
        </Link>
      </div>

      <div className="flex flex-col items-start justify-between gap-4 border-b border-[#dfe1e6] pb-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#6B778C]">filter_list</span>
          <span className="text-sm font-semibold uppercase tracking-wider text-[#6B778C]">Filter:</span>
          <select
            id="dept-filter"
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
            className="w-56 rounded-lg border border-[#dfe1e6] bg-white px-3 py-2 text-sm text-[#172B4D] shadow-sm outline-none transition-all focus:border-[#003d9b] focus:ring-2 focus:ring-[#003d9b]/10 cursor-pointer"
          >
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept === 'All' ? 'All Departments' : dept}
              </option>
            ))}
          </select>
        </div>
        <div className="text-xs font-semibold text-[#6B778C]">
          Showing {filteredEmployees.length} of {employees.length} Employees
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {filteredEmployees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            {...employee}
            onEdit={() => {
              setSelectedEmployeeId(employee.id)
              setModalOpen(true)
            }}
          />
        ))}
      </div>

      <EditModal
        open={modalOpen}
        name={selectedEmployee?.name || ''}
        role={selectedEmployee?.role || ''}
        department={selectedEmployee?.department || ''}
        onUpdate={handleUpdateEmployee}
        onClose={() => setModalOpen(false)}
      />
    </section>
  )
}

export default DirectoryPage