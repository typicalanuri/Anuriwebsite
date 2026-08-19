import Badge from '../ui/Badge'

interface ResourceCardProps {
  image: string
  name: string
  kind: string
  distance: string
  note: string
}

export default function ResourceCard({ image, name, kind, distance, note }: ResourceCardProps) {
  return (
    <article className="flex items-center gap-5 rounded-lg border border-border-subtle bg-surface-card p-4 shadow-card transition-colors duration-150 hover:border-rose md:p-5">
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="h-20 w-20 shrink-0 rounded-lg object-cover md:h-24 md:w-24"
      />
      <div className="min-w-0 flex-1">
        <div className="mb-1.5 flex flex-wrap items-center gap-3">
          <h3 className="font-display text-[15px] font-medium text-dark-brown md:text-[16px]">
            {name}
          </h3>
          <Badge>{kind}</Badge>
        </div>
        <p className="mb-1 font-body text-[11px] uppercase tracking-[0.14em] text-dusty-pink">
          {distance}
        </p>
        <p className="font-body text-[12px] text-brown-muted">{note}</p>
      </div>
    </article>
  )
}
