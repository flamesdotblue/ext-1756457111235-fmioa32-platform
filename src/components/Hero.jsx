import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[90vh] md:min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
        <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(transparent,rgba(0,0,0,0.6))]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-16 flex items-center min-h-[90vh] md:min-h-screen">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-black/40 px-3 py-1 text-xs tracking-widest uppercase text-green-200"
          >
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
            System Online — Welcome, Developer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-green-200"
          >
            Building sleek interfaces with a retro matrix soul
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="mt-4 text-green-300/80 max-w-2xl"
          >
            I’m a full‑stack developer crafting performant web apps, delightful animations, and immersive experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md border border-green-500/40 bg-green-500/10 px-5 py-3 text-green-200 hover:bg-green-500/20 transition-colors"
            >
              <Rocket className="h-4 w-4 transition-transform group-hover:-rotate-12" />
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-green-500/20 bg-black/40 px-5 py-3 text-green-300 hover:bg-black/60 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center">
        <span className="text-xs text-green-400/70 tracking-widest">SCROLL</span>
      </div>
    </section>
  );
}
