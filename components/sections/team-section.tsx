import Image from "next/image";

const team = [
  {
    name: "Adem Ahmet Kece",
    role: "Co-Founder & CEO",
    image: "/adem.png",
  },
  {
    name: "Tuncay Topcu",
    role: "Co-Founder & CTO",
    image: "/tuncay.png",
  },
  {
    name: "Sena Kara",
    role: "Co-Founder & CPO",
    image: "/sena.png",
  },
  {
    name: "Serbay Topcu",
    role: "Co-Founder & CCO",
    image: "/serbay.png",
  },
];

export function TeamSection() {
  return (
    <section className="space-y-12">
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
          Our Team
        </p>
        <h2 className="text-3xl font-semibold sm:text-4xl">Meet the Founding Team</h2>
        <p className="max-w-2xl text-sm text-white/70">
          Visionaries engineering transformative experiences across AI, entertainment, and design.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {team.map((member) => (
          <article
            key={member.name}
            className="flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-lg backdrop-blur"
          >
            <div className="relative h-32 w-32 overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-primary/40 via-primary/10 to-transparent">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 128px, 160px"
                className="object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-white/70">{member.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

