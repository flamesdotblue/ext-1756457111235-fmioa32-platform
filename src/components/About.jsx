import React from 'react';
import { Terminal, Code } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]" aria-hidden>
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(0,255,80,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,80,0.15)_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>
      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-semibold text-green-200"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 max-w-3xl text-green-300/80 leading-relaxed"
        >
          I specialize in crafting modern, accessible web apps with a focus on performance and micro‑interactions. My toolkit spans React, TypeScript, Node, and animations with Framer Motion and WebGL. I love turning complex ideas into intuitive, elegant interfaces.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { title: 'Frontend', desc: 'React, TS, Tailwind, Motion', Icon: Code },
            { title: 'Backend', desc: 'Node, Express, Prisma', Icon: Terminal },
            { title: 'Principles', desc: 'A11y, Perf, DX, Testing', Icon: Terminal },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="rounded-lg border border-green-500/20 bg-black/40 p-5 hover:border-green-500/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <item.Icon className="h-5 w-5 text-green-400" />
                <h3 className="font-medium text-green-200">{item.title}</h3>
              </div>
              <p className="mt-2 text-sm text-green-300/80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
