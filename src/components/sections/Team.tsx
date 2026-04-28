'use client'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { teamData } from '@/lib/data'

export function Team() {
  return (
    <section id="team" className="relative py-32 bg-navy-900/30">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <p className="text-brand-400 text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Leadership
          </p>
          <div className="section-divider mx-auto mb-8" />
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-100">
            리더십 <span className="text-gold-gradient">팀</span>
          </h2>
          <p className="mt-6 text-neutral-400 max-w-2xl mx-auto text-lg">
            글로벌 톱 컨설팅 펌과 Fortune 500 기업 출신의 파트너들이 이끌고 있습니다.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-8 text-center group transition-all duration-500 hover:-translate-y-2">
                {/* Avatar with initials */}
                <div className="relative mx-auto mb-6 w-24 h-24">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-navy-700 to-navy-800 border-2 border-brand-500/20 flex items-center justify-center group-hover:border-brand-500/50 transition-colors">
                    <span className="text-2xl font-bold text-gold-gradient font-display">
                      {member.initials}
                    </span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-brand-500 border-2 border-navy-950 flex items-center justify-center">
                    <svg className="w-3 h-3 text-navy-950" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-neutral-100 mb-1">{member.name}</h3>
                <p className="text-brand-400 text-sm font-medium mb-4">{member.role}</p>
                <p className="text-neutral-500 text-xs leading-relaxed">{member.bio}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
