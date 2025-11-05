"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Adem Ahmet Kece",
    role: "Co-Founder",
    image: "/adem.png",
    bio: "Visionary leader driving strategic growth and innovation across all business verticals.",
    linkedin: "https://www.linkedin.com/in/ademahmetkece",
    email: "adem@withbooster.com",
  },
  {
    name: "Tuncay Topcu",
    role: "Co-Founder",
    image: "/tuncay.png",
    bio: "Technical architect behind our AI-powered solutions and platform infrastructure.",
    linkedin: "https://www.linkedin.com/in/tuncay-topçu",
    email: "tuncay@withbooster.com",
  },
  {
    name: "Sena Kara",
    role: "Co-Founder",
    image: "/sena.png",
    bio: "Creative director bringing artistic vision to digital products and brand identity.",
    linkedin: "https://www.linkedin.com/in/ssenakara",
    email: "sena@withbooster.com",
  },
  {
    name: "Serbay Topcu",
    role: "Co-Founder",
    image: "/serbay.png",
    bio: "Product strategist shaping user experiences and driving product excellence.",
    linkedin: "https://www.linkedin.com/in/serbaytopcu",
    email: "serbay@withbooster.com",
  },
];

export function TeamSection() {
  return (
    <section className="space-y-12">
      <motion.div
        className="flex flex-col gap-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
          Leadership
        </p>
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          The withbooster Team
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-slate-600">
          Visionaries engineering transformative experiences across AI, entertainment, and design.
        </p>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member, index) => (
          <motion.article
            key={member.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group flex flex-col items-center gap-4 rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:shadow-xl"
          >
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-slate-100 bg-gradient-to-br from-primary/10 via-white to-white transition-transform group-hover:scale-105">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 128px, 160px"
                className="object-cover"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
              <p className="text-sm font-medium text-primary">{member.role}</p>
              <p className="text-xs leading-relaxed text-slate-600">{member.bio}</p>
              
              {/* Contact Links */}
              <div className="flex items-center justify-center gap-3 pt-2">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-[#0077B5] hover:text-white hover:scale-110"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-primary hover:text-white hover:scale-110"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

