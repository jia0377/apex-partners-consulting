'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { expertiseData } from '@/lib/data'

function ProgressBar({ name, percentage, delay }: { name: string; percentage: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between mb-3">
        <span className="text-neutral-300 font-medium text-sm">{name}</span>
        <span className="text-brand-400 text-sm font-semibold">{percentage}%</span>
      </div>
      <div className="h-2 bg-navy-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-brand-600 to-brand-400"
        />
      </div>
    </div>
  )
}

export function Expertise() {
  return (
    <section id="expertise" className="relative py-32 bg-navy-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: large decorative element */}
          <AnimatedSection>
            <div className="relative">
              <div className="glass-card rounded-2xl p-12 relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full border border-brand-500/10" />
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border border-brand-500/5" />
                <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-brand-500/5 blur-2xl" />

                <div className="relative">
                  <div className="text-8xl font-bold text-gold-gradient mb-4 font-display">15+</div>
                  <div className="text-xl text-neutral-300 font-medium mb-2">Years of Excellence</div>
                  <p className="text-neutral-500 leading-relaxed">
                    다양한 산업군에서 축적된 전문성으로 고객사의 복잡한 비즈니스 과제에 최적의 솔루션을 제공합니다.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-navy-700/50 grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-brand-400">6</div>
                    <div className="text-xs text-neutral-500 mt-1">산업 전문 분야</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-400">120+</div>
                    <div className="text-xs text-neutral-500 mt-1">전문 컨설턴트</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-400">8</div>
                    <div className="text-xs text-neutral-500 mt-1">글로벌 거점</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: progress bars */}
          <div>
            <AnimatedSection>
              <p className="text-brand-400 text-sm tracking-[0.3em] uppercase font-medium mb-4">
                {expertiseData.tagline}
              </p>
              <div className="section-divider mb-8" />
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-100 mb-12">
                {expertiseData.headline}
              </h2>
            </AnimatedSection>

            <div className="space-y-7">
              {expertiseData.industries.map((industry, i) => (
                <ProgressBar
                  key={industry.name}
                  name={industry.name}
                  percentage={industry.percentage}
                  delay={i * 0.15}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
