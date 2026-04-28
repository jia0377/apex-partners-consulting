'use client'

import { motion } from 'framer-motion'
import { heroData } from '@/lib/data'

export function Hero() {
  return (
    <section id="hero" className="hero-gradient relative min-h-screen flex items-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(212,168,67,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Glowing orb */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/3 left-1/6 w-64 h-64 bg-navy-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-brand-400 text-sm tracking-[0.3em] uppercase font-medium mb-6"
            >
              {heroData.tagline}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-5xl lg:text-7xl font-bold leading-tight mb-8"
            >
              {heroData.headline.split('\n').map((line, i) => (
                <span key={i} className="block">
                  {i === 0 ? (
                    <span className="text-neutral-100">{line}</span>
                  ) : (
                    <span className="text-gold-gradient">{line}</span>
                  )}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-neutral-400 text-lg leading-relaxed max-w-lg mb-10"
            >
              {heroData.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="btn-gold px-8 py-4 rounded-lg text-base">
                {heroData.cta}
              </a>
              <a href="#services" className="btn-outline-gold px-8 py-4 rounded-lg text-base">
                서비스 살펴보기
              </a>
            </motion.div>
          </div>

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="glass-card rounded-2xl p-10">
              <div className="grid grid-cols-2 gap-8">
                {heroData.stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="text-center p-4"
                  >
                    <div className="text-4xl font-bold text-gold-gradient mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-neutral-400 tracking-wide">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="lg:hidden mt-16"
        >
          <div className="grid grid-cols-2 gap-4">
            {heroData.stats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-xl p-5 text-center">
                <div className="text-2xl font-bold text-gold-gradient">{stat.value}</div>
                <div className="text-xs text-neutral-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
    </section>
  )
}
