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
    <section id="about" className="space-y-12">
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
          About Us
        </p>
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Meet the Founding Team</h2>
        <p className="max-w-2xl text-sm text-slate-600">
          Visionaries engineering transformative experiences across AI, entertainment, and design.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {team.map((member) => (
          <article
            key={member.name}
            className="flex flex-col items-center gap-4 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-slate-100 bg-gradient-to-br from-primary/10 via-white to-white">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 128px, 160px"
                className="object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
              <p className="text-sm text-slate-600">{member.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

