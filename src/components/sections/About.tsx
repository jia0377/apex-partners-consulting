'use client'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { aboutData } from '@/lib/data'

const iconMap: Record<string, JSX.Element> = {
  shield: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  ),
  target: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-4.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    </svg>
  ),
  handshake: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  ),
}

export function About() {
  return (
    <section id="about" className="relative py-32 bg-navy-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text */}
          <div>
            <AnimatedSection>
              <p className="text-brand-400 text-sm tracking-[0.3em] uppercase font-medium mb-4">
                {aboutData.tagline}
              </p>
              <div className="section-divider mb-8" />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-8 text-neutral-100">
                {aboutData.headline.split('\n').map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-neutral-400 leading-relaxed text-lg">
                {aboutData.description}
              </p>
            </AnimatedSection>
          </div>

          {/* Right: Values */}
          <div className="space-y-6">
            {aboutData.values.map((value, i) => (
              <AnimatedSection key={value.title} delay={0.1 + i * 0.15}>
                <div className="glass-card rounded-xl p-7 flex gap-6 items-start transition-all duration-300">
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400">
                    {iconMap[value.icon]}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-100 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
