interface SectionHeadingProps {
  kicker?: string;
  title: string;
  highlight?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ kicker, title, highlight, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mb-12 text-center' : 'mb-10'}>
      {kicker && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gold-600 dark:text-gold">
          {kicker}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold text-navy-950 dark:text-white md:text-4xl">
        {title}
        {highlight ? (
          <>
            {' '}
            <span className="text-gold-600 dark:text-gold">{highlight}</span>
          </>
        ) : null}
      </h2>
    </div>
  );
}
