import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Neon Dashboard',
    desc: 'High‑performance analytics dashboard with dynamic theming and real‑time charts.',
    tags: ['React', 'Tailwind', 'D3'],
    link: '#',
  },
  {
    title: 'Matrix Chat',
    desc: 'End‑to‑end encrypted chat with presence, typing indicators, and message reactions.',
    tags: ['Next.js', 'WebSocket', 'Prisma'],
    link: '#',
  },
  {
    title: 'XR Showroom',
    desc: 'Interactive 3D product viewer with smooth camera orbits and AR previews.',
    tags: ['Three.js', 'WebGL', 'Motion'],
    link: '#',
  },
];

function Card({ p, i }) {
  return (
    <motion.a
      href={p.link}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: 0.1 * i, duration: 0.6 }}
      className="group relative rounded-xl border border-green-500/20 bg-gradient-to-b from-black/60 to-black/30 p-5 hover:border-green-400/40 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden>
        <div className="absolute -inset-[1px] bg-[conic-gradient(at_top_left,rgba(0,255,120,0.3),transparent,transparent)] blur-md"></div>
      </div>
      <div className="relative z-10">
        <h3 className="text-lg font-medium text-green-100">{p.title}</h3>
        <p className="mt-2 text-sm text-green-300/80">{p.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="text-xs text-green-300/80 border border-green-500/20 rounded px-2 py-0.5">{t}</span>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-green-500/10 to-transparent"></div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden>
        <div className="absolute inset-0 [background-image:radial-gradient(rgba(0,255,100,0.2)_1px,transparent_1px)] [background-size:18px_18px]"></div>
      </div>
      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-semibold text-green-200"
        >
          Selected Projects
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <Card key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
