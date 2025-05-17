import Link from 'next/link';

export default function HomePage() {
  const cardClass =
    'rounded-sm border border-muted bg-background p-6 pt-4 pb-4 text-foreground hover:bg-muted/50 transition-shadow shadow-sm hover:shadow-md';

  return (
    <main className="flex flex-col justify-center px-4 py-16 max-w-6xl mx-auto">
      <h1 className="mb-4 text-4xl font-semibold tracking-tight text-center">Welcome to T9</h1>
      <p className="mb-12 text-muted-foreground text-center text-base max-w-xl mx-auto">
        Central Hub of Resources
      </p>

      {/* Semesters Section */}
      <section className="mb-10">
        <h2 className="text-lg font-medium mb-4 flex items-center gap-2 text-foreground">
          <span>📚</span> Semesters
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="/sem-3" className={cardClass}>Semester 3</Link>
          <Link href="/sem-4" className={cardClass}>Semester 4</Link>
          <Link href="/sem-5" className={cardClass}>Semester 5</Link>
          <Link href="/sem-6" className={cardClass}>Semester 6</Link>
        </div>
      </section>

      {/* Useful Links Section */}
      <section>
        <h2 className="text-lg font-medium mb-4 flex items-center gap-2 text-foreground">
          <span>🔗</span> Useful Links
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-0">
          <a href="https://chat.whatsapp.com/JuvHVkzVjc41ywITKe23h0" target="_blank" rel="noopener noreferrer" className={cardClass}>
            Join WhatsApp Group
          </a>
          <a href="https://tally.so/r/nr6d2N" target="_blank" rel="noopener noreferrer" className={cardClass}>
            Submit Material
          </a>
          <a href="https://tally.so/r/w48opO" target="_blank" rel="noopener noreferrer" className={cardClass}>
            Feedback and Queries
          </a>
          <Link href="/about" className={cardClass}>About me and T9</Link>
          <Link href="/changelogs" className={cardClass}>Changelogs</Link>
        </div>
      </section>
    </main>
  );
}
