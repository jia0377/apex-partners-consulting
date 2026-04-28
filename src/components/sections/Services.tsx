import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { servicesData } from '@/lib/data'

const iconMap: Record<string, React.ReactNode> = {
  chess: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
    </svg>
  ),
  cpu: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
    </svg>
  ),
  building: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
    </svg>
  ),
  settings: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  ),
}

export function Services() {
  const [activeId, setActiveId] = useState(servicesData[0].id)
  const active = servicesData.find((s) => s.id === activeId)!

  return (
    <section id="services" className="relative py-32 bg-navy-900/50">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <p className="text-brand-400 text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Our Services
          </p>
          <div className="section-divider mx-auto mb-8" />
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-100">
            전문 컨설팅 <span className="text-gold-gradient">서비스</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Service tabs */}
          <div className="lg:col-span-4 space-y-3">
            {servicesData.map((service, i) => (
              <AnimatedSection key={service.id} delay={i * 0.1}>
                <button
                  onClick={() => setActiveId(service.id)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 group ${
                    activeId === service.id
                      ? 'glass-card border-brand-500/30 bg-navy-800/80'
                      : 'hover:bg-navy-800/30 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                        activeId === service.id
                          ? 'bg-brand-500/20 text-brand-400'
                          : 'bg-navy-800/50 text-neutral-500 group-hover:text-brand-400'
                      }`}
                    >
                      {iconMap[service.icon]}
                    </div>
                    <div>
                      <h3 className={`font-semibold transition-colors ${
                        activeId === service.id ? 'text-neutral-100' : 'text-neutral-400'
                      }`}>
                        {service.title}
                      </h3>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>

          {/* Service detail */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-10 lg:p-12 h-full"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-brand-500/15 flex items-center justify-center text-brand-400">
                    {iconMap[active.icon]}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-100">{active.title}</h3>
                    <p className="text-brand-400 text-sm">{active.subtitle}</p>
                  </div>
                </div>

                <p className="text-neutral-400 text-lg leading-relaxed mb-10">
                  {active.desc}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {active.features.map((feature, i) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 p-4 rounded-lg bg-navy-800/40"
                    >
                      <div className="w-2 h-2 rounded-full bg-brand-400 shrink-0" />
                      <span className="text-neutral-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-navy-700/50">
                  <a
                    href="#contact"
                    className="btn-outline-gold px-6 py-3 rounded-lg inline-flex items-center gap-2 text-sm"
                  >
                    자세히 상담하기
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
