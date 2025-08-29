import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <footer id="contact" className="relative py-16">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden>
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(0,255,80,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,80,0.15)_1px,transparent_1px)] [background-size:28px_28px]"></div>
      </div>
      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold text-green-200"
        >
          Let’s connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-2 text-green-300/80 max-w-2xl"
        >
          Open to collaborations, freelance projects, and full‑time roles. Drop a line and say hi.
        </motion.p>

        <div className="mt-6 flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-green-500/20 bg-black/40 px-4 py-2 text-green-200 hover:border-green-500/40 hover:bg-black/60"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-green-500/20 bg-black/40 px-4 py-2 text-green-200 hover:border-green-500/40 hover:bg-black/60"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-md border border-green-500/20 bg-black/40 px-4 py-2 text-green-200 hover:border-green-500/40 hover:bg-black/60"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
        </div>

        <div className="mt-10 border-t border-green-500/10 pt-6 text-xs text-green-400/70">
          © {new Date().getFullYear()} Your Name • Designed with a love for retro terminals
        </div>
      </div>
    </footer>
  );
}
