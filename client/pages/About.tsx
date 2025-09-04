const dh = [
  { name: "MD Hamza", role: "Professional Artist" },
  { name: "Rohit Kalia", role: "Canvas Designer" },
  { name: "Neerav Sharma", role: "Content Creator" },
  { name: "Anjali", role: "Artist" },
  { name: "Chetna", role: "Canvas Artist" },
  { name: "Yuvraj Khanna", role: "Printer & Executive" },
];
const cc = [
  { name: "Kaarthik Dass Arora", role: "Full-Stack Web Developer (Leader & Architect)" },
  { name: "Madhav Shah", role: "GitHub Manager & Hosting Expert" },
  { name: "Yashasvi Sharma", role: "Backend Developer" },
  { name: "Jasnoor", role: "Python Backend Developer" },
  { name: "Laxmi Joshi", role: "Frontend Developer" },
  { name: "Satyam", role: "Automation Specialist" },
];

function Member({ name, role }: { name: string; role: string }) {
  return (
    <div className="flex items-center gap-4 rounded-lg border bg-background p-4">
      <div className="h-12 w-12 shrink-0 rounded-full bg-accent/40 grid place-items-center text-sm font-semibold">
        {name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
      </div>
      <div>
        <div className="font-medium leading-tight">{name}</div>
        <div className="text-foreground/70 text-sm leading-tight">{role}</div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-widest text-foreground/60">About Hive & Crew</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-extrabold">Team</h1>
        <p className="mt-2 text-foreground/70">Team of 12 led by Kaarthik Dass Arora – Professional Full‑Stack Developer, visionary, coder, and founder of Hive & Crew.</p>
      </header>

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1 rounded-lg border glass p-6 glow-min card-neon">
          <h3 className="text-lg font-semibold">Leadership</h3>
          <div className="mt-4 flex items-start gap-4">
            <div className="h-14 w-14 rounded-full bg-primary/20 grid place-items-center font-semibold text-primary">KA</div>
            <div>
              <div className="font-semibold">Kaarthik Dass Arora</div>
              <div className="text-sm text-foreground/70">Full‑Stack Web Developer (Leader & Architect)</div>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 rounded-lg border glass p-6">
          <h3 className="text-lg font-semibold">Values</h3>
          <ul className="mt-3 grid gap-2 sm:grid-cols-3 text-sm text-foreground/70">
            <li>Design with intention</li>
            <li>Code with discipline</li>
            <li>Deliver with pride</li>
          </ul>
        </div>
      </section>

      <section className="mt-10 grid gap-10">
        <div>
          <h2 className="text-xl font-semibold">Design Hive Team</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {dh.map((m) => (
              <Member key={m.name} name={m.name} role={m.role} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Code Crew Team</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {cc.map((m) => (
              <Member key={m.name} name={m.name} role={m.role} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
