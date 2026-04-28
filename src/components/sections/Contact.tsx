'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { contactData } from '@/lib/data'

const iconMap: Record<string, JSX.Element> = {
  mapPin: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  ),
  phone: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  ),
  mail: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  ),
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative py-32 bg-navy-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <p className="text-brand-400 text-sm tracking-[0.3em] uppercase font-medium mb-4">
            {contactData.tagline}
          </p>
          <div className="section-divider mx-auto mb-8" />
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-100">
            {contactData.headline.split(' ')[0]}{' '}
            <span className="text-gold-gradient">{contactData.headline.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="mt-6 text-neutral-400 max-w-2xl mx-auto">
            {contactData.description}
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatedSection>
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-lg font-bold text-neutral-100 mb-6">연락처</h3>
                <div className="space-y-5">
                  {contactData.info.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400">
                        {iconMap[item.icon]}
                      </div>
                      <span className="text-neutral-400 text-sm leading-relaxed pt-2">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-navy-700/50">
                  <p className="text-neutral-500 text-xs mb-3">영업시간</p>
                  <p className="text-neutral-300 text-sm">월–금 09:00 – 18:00</p>
                  <p className="text-neutral-500 text-xs mt-1">주말 및 공휴일 휴무</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <AnimatedSection delay={0.15}>
              <div className="glass-card rounded-2xl p-8 lg:p-10">
                <h3 className="text-lg font-bold text-neutral-100 mb-8">문의하기</h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-500/20 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-neutral-100 mb-2">감사합니다!</h4>
                    <p className="text-neutral-400">담당 파트너가 24시간 내에 연락드리겠습니다.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-neutral-400 mb-2">이름 *</label>
                        <input
                          type="text"
                          required
                          className="w-full bg-navy-800/60 border border-navy-700/50 rounded-lg px-4 py-3 text-neutral-200 text-sm placeholder-neutral-600 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/25 transition-all"
                          placeholder="홍길동"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-neutral-400 mb-2">회사명</label>
                        <input
                          type="text"
                          className="w-full bg-navy-800/60 border border-navy-700/50 rounded-lg px-4 py-3 text-neutral-200 text-sm placeholder-neutral-600 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/25 transition-all"
                          placeholder="회사명을 입력하세요"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-neutral-400 mb-2">이메일 *</label>
                        <input
                          type="email"
                          required
                          className="w-full bg-navy-800/60 border border-navy-700/50 rounded-lg px-4 py-3 text-neutral-200 text-sm placeholder-neutral-600 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/25 transition-all"
                          placeholder="email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-neutral-400 mb-2">연락처</label>
                        <input
                          type="tel"
                          className="w-full bg-navy-800/60 border border-navy-700/50 rounded-lg px-4 py-3 text-neutral-200 text-sm placeholder-neutral-600 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/25 transition-all"
                          placeholder="010-0000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-neutral-400 mb-2">관심 서비스</label>
                      <select className="w-full bg-navy-800/60 border border-navy-700/50 rounded-lg px-4 py-3 text-neutral-200 text-sm focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/25 transition-all">
                        <option value="">선택해 주세요</option>
                        <option value="strategy">전략 컨설팅</option>
                        <option value="digital">디지털 트랜스포메이션</option>
                        <option value="mna">M&A 자문</option>
                        <option value="operations">운영 혁신</option>
                        <option value="other">기타</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm text-neutral-400 mb-2">메시지 *</label>
                      <textarea
                        required
                        rows={4}
                        className="w-full bg-navy-800/60 border border-navy-700/50 rounded-lg px-4 py-3 text-neutral-200 text-sm placeholder-neutral-600 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/25 transition-all resize-none"
                        placeholder="문의 내용을 입력해 주세요"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-gold w-full py-4 rounded-lg text-base"
                    >
                      문의 보내기
                    </button>
                    <p className="text-neutral-600 text-xs text-center">
                      제출하신 정보는 상담 목적으로만 사용됩니다.
                    </p>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
