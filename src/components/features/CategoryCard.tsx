interface CategoryCardProps {
  image: string
  label: string
  count: string
  selected?: boolean
  onClick?: () => void
}

export default function CategoryCard({ image, label, count, selected = false, onClick }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      aria-pressed={selected}
      className={`group cursor-pointer overflow-hidden rounded-2xl bg-surface-card text-left shadow-card transition-all duration-150 ${
        selected ? 'outline-2 outline-offset-2 outline-dusty-pink' : ''
      }`}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={label}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex items-center justify-between px-5 py-4">
        <span className="font-display text-[16px] font-medium text-dark-brown">{label}</span>
        <span className="font-body text-[11px] uppercase tracking-[0.14em] text-dusty-pink">
          {count}
        </span>
      </div>
    </button>
  )
}
