interface SwitchProps {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}

export default function Switch({ label, checked, onChange }: SwitchProps) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-4 py-3">
      <span className="font-body text-[13px] text-dark-brown">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-150 ${
          checked ? 'bg-dusty-pink' : 'bg-border-subtle'
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-surface-card shadow-card transition-transform duration-150 ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </label>
  )
}
