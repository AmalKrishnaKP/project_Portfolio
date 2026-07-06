import { useMemo, useState } from 'react'
import ThemePreview from '../components/ThemePreview'
import Toast from '../components/Toast'

const presets = [
  { name: 'Enterprise', values: ['#003d9b', '#36B37E', '#f8f9fb', '#edeef0', '#172B4D'] },
  { name: 'Autumn', values: ['#7b2600', '#FFAB00', '#fff7f5', '#ffdbcf', '#380d00'] },
  { name: 'Ocean', values: ['#285ab9', '#b1c6ff', '#ffffff', '#dae2ff', '#001946'] },
  { name: 'Midnight', values: ['#191c1e', '#434654', '#2e3132', '#191c1e', '#f8f9fb'] },
]

function ThemePage() {
  const [primary, setPrimary] = useState('#003d9b')
  const [secondary, setSecondary] = useState('#36B37E')
  const [surface, setSurface] = useState('#f8f9fb')
  const [header, setHeader] = useState('#edeef0')
  const [text, setText] = useState('#172B4D')
  const [toast, setToast] = useState('')

  const values = useMemo(() => ({ primary, secondary, surface, header, text }), [primary, secondary, surface, header, text])

  function applyPreset(preset: (typeof presets)[number]) {
    setPrimary(preset.values[0])
    setSecondary(preset.values[1])
    setSurface(preset.values[2])
    setHeader(preset.values[3])
    setText(preset.values[4])
  }

  function saveTheme() {
    setToast('Theme preferences saved')
    window.setTimeout(() => setToast(''), 2000)
  }

  return (
    <section className="space-y-8">
      <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <h1 className="text-[24px] font-semibold tracking-[-0.02em] text-[#172B4D] md:text-[28px]">Theme Editor</h1>
          <p className="text-sm text-[#6B778C]">Customize the visual identity of the enterprise portal. Changes apply globally.</p>
        </div>
        <button type="button" onClick={saveTheme} className="flex items-center gap-2 rounded-lg bg-[#003d9b] px-6 py-2.5 text-[12px] font-semibold text-white shadow-lg shadow-[#003d9b]/20 transition-all hover:scale-[1.02] active:scale-95">
          <span className="material-symbols-outlined">save</span>
          Save Theme
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <div className="rounded-xl border border-[#dfe1e6] bg-white p-8 shadow-sm">
            <h3 className="mb-6 text-[16px] font-semibold text-[#172B4D]">Global Theme &amp; Presets</h3>
            <div className="mb-8">
              <label className="mb-3 block text-[11px] font-bold uppercase text-[#6B778C]">Base Theme Mode</label>
              <select className="w-full rounded-lg border-none bg-[#f3f4f6] px-4 py-2.5 text-[14px] outline-none focus:ring-2 focus:ring-[#003d9b]/20">
                <option>Light Mode (Default)</option>
                <option>Dark Mode</option>
                <option>High Contrast</option>
                <option>Soft / Pastel</option>
              </select>
            </div>

            <label className="mb-3 block text-[11px] font-bold uppercase text-[#6B778C]">Theme Presets</label>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {presets.map((preset) => (
                <button
                  key={preset.name}
                  type="button"
                  onClick={() => applyPreset(preset)}
                  className="flex flex-col gap-2 rounded-lg border border-[#dfe1e6] p-2 text-left transition-colors hover:border-[#003d9b]"
                >
                  <div className="flex h-8 w-full overflow-hidden rounded">
                    <div className="flex-1" style={{ backgroundColor: preset.values[0] }} />
                    <div className="flex-1" style={{ backgroundColor: preset.values[1] }} />
                    <div className="flex-1" style={{ backgroundColor: preset.values[2] }} />
                  </div>
                  <span className="text-[10px] font-bold uppercase">{preset.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#dfe1e6] bg-white p-8 shadow-sm">
            <h3 className="mb-6 text-[16px] font-semibold text-[#172B4D]">Granular Color Controls</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ColorField label="Primary Accent" value={values.primary} onChange={setPrimary} />
              <ColorField label="Secondary / Success" value={values.secondary} onChange={setSecondary} />
              <ColorField label="Page Background" value={values.surface} onChange={setSurface} />
              <ColorField label="Header/Sidebar" value={values.header} onChange={setHeader} />
              <div className="md:col-span-2">
                <ColorField label="Primary Text" value={values.text} onChange={setText} />
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-dashed border-[#003d9b]/20 bg-[#003d9b]/5 p-4">
              <p className="text-xs italic text-[#003d9b]">
                Note: These settings define the design system for all 2,400+ employees in the portal.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-2">
            <span className="text-[12px] font-semibold uppercase text-[#6B778C]">Live Preview</span>
            <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-[#36B37E]">
              <span className="material-symbols-outlined text-[14px]">visibility</span>
              Preview Mode
            </span>
          </div>
          <ThemePreview {...values} />
        </div>
      </div>

      {toast ? <Toast message={toast} icon="palette" /> : null}
    </section>
  )
}

function ColorField({
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
      <label className="mb-2 block text-[11px] font-bold uppercase text-[#6B778C]">{label}</label>
      <div className="flex items-center gap-3">
        <input
          type="color"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-10 w-16 cursor-pointer rounded border border-[#dfe1e6]"
        />
        <span className="font-mono text-xs uppercase">{value}</span>
      </div>
    </div>
  )
}

export default ThemePage