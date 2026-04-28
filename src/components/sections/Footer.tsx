'use client'

import { siteConfig, navLinks } from '@/lib/data'

export function Footer() {
  return (
    <footer className="relative bg-navy-950 border-t border-navy-800/50">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
                <span className="text-navy-950 font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold tracking-wider text-neutral-100">
                APEX PARTNERS
              </span>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-md mb-6">
              전략적 혁신을 통해 기업의 지속 가능한 성장을 이끄는 프리미엄 컨설팅 파트너.
              2008년 설립 이래 글로벌 선도 기업들과 함께 해왔습니다.
            </p>
            <div className="flex gap-4">
              {['LinkedIn', 'Email'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg border border-navy-700/50 flex items-center justify-center text-neutral-500 hover:text-brand-400 hover:border-brand-500/30 transition-all"
                  aria-label={social}
                >
                  {social === 'LinkedIn' ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-300 mb-5 tracking-wider uppercase">Navigate</h4>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-neutral-500 hover:text-brand-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Office info */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-300 mb-5 tracking-wider uppercase">Office</h4>
            <div className="space-y-3 text-sm text-neutral-500">
              <p>서울 강남구 테헤란로 427</p>
              <p>APEX Tower 38F</p>
              <p className="pt-2">+82 2-555-0100</p>
              <p>contact@apexpartners.co.kr</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-navy-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-xs">{siteConfig.copyright}</p>
          <div className="flex gap-6 text-xs text-neutral-600">
            <a href="#" className="hover:text-neutral-400 transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
