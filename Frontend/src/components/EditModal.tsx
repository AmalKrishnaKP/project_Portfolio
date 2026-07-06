import { useEffect, useState } from 'react'

type EditModalProps = {
  open: boolean
  name: string
  role: string
  department: string
  onUpdate: (values: { name: string; role: string; department: string }) => void
  onClose: () => void
}

function EditModal({ open, name, role, department, onUpdate, onClose }: EditModalProps) {
  const [draftName, setDraftName] = useState(name)
  const [draftRole, setDraftRole] = useState(role)
  const [draftDepartment, setDraftDepartment] = useState(department)

  // Reset the form each time a different card is opened for editing.
  useEffect(() => {
    if (open) {
      setDraftName(name)
      setDraftRole(role)
      setDraftDepartment(department)
    }
  }, [department, name, open, role])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-[#191c1e]/40 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md overflow-hidden rounded-xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#dfe1e6] px-6 py-4">
          <h3 className="text-[20px] font-semibold text-[#172B4D]">Edit Employee Profile</h3>
          <button type="button" onClick={onClose} className="rounded-full p-1 hover:bg-[#f3f4f6]">
            <span className="material-symbols-outlined text-[#6B778C]">close</span>
          </button>
        </div>

        <div className="space-y-4 p-6">
          <Field label="Full Name" value={draftName} onChange={setDraftName} />
          <Field label="Role" value={draftRole} onChange={setDraftRole} />
          <Field label="Department" value={draftDepartment} onChange={setDraftDepartment} />
        </div>

        <div className="flex justify-end gap-3 border-t border-[#dfe1e6] bg-[#f3f4f6] px-6 py-4">
          <button type="button" onClick={onClose} className="rounded px-4 py-2 text-[12px] font-semibold text-[#191c1e] hover:bg-[#e7e8ea]">
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              onUpdate({
                name: draftName,
                role: draftRole,
                department: draftDepartment,
              })
              onClose()
            }}
            className="rounded bg-[#003d9b] px-6 py-2 text-[12px] font-semibold text-white hover:bg-[#0052cc]"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  )
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[11px] font-bold uppercase text-[#6B778C]">{label}</label>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-lg border-none bg-[#f3f4f6] px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#003d9b]/20"
      />
    </div>
  )
}

export default EditModal