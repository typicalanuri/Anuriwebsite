interface QuoteBlockProps {
  quote: string
  attribution?: string
}

export default function QuoteBlock({ quote, attribution }: QuoteBlockProps) {
  return (
    <section className="bg-blush px-6 py-16 md:px-12 md:py-[88px]">
      <blockquote className="mx-auto max-w-[760px] text-center">
        <p className="font-display text-[20px] font-medium italic leading-relaxed text-dark-brown md:text-[26px]">
          &ldquo;{quote}&rdquo;
        </p>
        {attribution && (
          <footer className="mt-6 font-body text-[11px] uppercase tracking-[0.2em] text-dusty-pink">
            {attribution}
          </footer>
        )}
      </blockquote>
    </section>
  )
}
