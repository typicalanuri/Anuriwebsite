interface CommunityPostProps {
  initial: string
  name: string
  meta: string
  text: string
  replies: number
}

export default function CommunityPost({ initial, name, meta, text, replies }: CommunityPostProps) {
  return (
    <article className="rounded-lg border border-border-subtle bg-surface-card p-5 shadow-card md:p-6">
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rose font-display text-[15px] font-semibold text-dark-brown">
          {initial}
        </span>
        <div>
          <p className="font-body text-[13px] font-semibold text-dark-brown">{name}</p>
          <p className="font-body text-[10.5px] uppercase tracking-[0.14em] text-brown-muted">
            {meta}
          </p>
        </div>
      </div>
      <p className="mb-4 font-body text-[13px] leading-relaxed text-dark-brown">{text}</p>
      <p className="font-body text-[11px] uppercase tracking-[0.14em] text-dusty-pink">
        {replies} {replies === 1 ? 'reply' : 'replies'}
      </p>
    </article>
  )
}
