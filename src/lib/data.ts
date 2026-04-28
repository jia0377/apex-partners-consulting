/* ================================================================
 *  lib/data.ts — APEX PARTNERS SITE CONFIG & CONTENT
 * ================================================================ */

export const siteConfig = {
  /** Shown in browser tab, admin panel, and SEO metadata */
  name: 'APEX PARTNERS',
  /** SEO meta description */
  description:
    '비즈니스의 정점을 향해. APEX PARTNERS는 전략 컨설팅, 디지털 트랜스포메이션, M&A 자문 분야에서 글로벌 기업의 성장을 이끄는 프리미엄 컨설팅 펌입니다.',
  /** Copyright line */
  copyright: `© ${new Date().getFullYear()} APEX PARTNERS. All rights reserved.`,
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export const heroData = {
  tagline: 'Strategic Excellence Since 2008',
  headline: '비즈니스의\n정점을 향해',
  subheadline:
    'APEX PARTNERS는 글로벌 선도 기업들과 함께 전략적 혁신을 설계하고 실행합니다. 데이터 기반 인사이트와 깊은 산업 전문성으로 지속 가능한 성장을 만들어 갑니다.',
  cta: '상담 예약하기',
  stats: [
    { value: '200+', label: '프로젝트 완료' },
    { value: '15년', label: '업계 경력' },
    { value: '98%', label: '고객 만족도' },
    { value: '40+', label: '글로벌 파트너' },
  ],
}

export const aboutData = {
  tagline: 'About Us',
  headline: '신뢰와 전문성으로\n비즈니스 가치를 극대화합니다',
  description:
    'APEX PARTNERS는 2008년 설립 이래 Fortune 500 기업부터 혁신적인 스타트업까지 다양한 고객사의 전략적 파트너로서 함께 해왔습니다. 우리는 단순한 조언을 넘어, 실행 가능한 솔루션을 제시하고 함께 성과를 만들어 갑니다.',
  values: [
    {
      icon: 'shield',
      title: 'Integrity',
      desc: '투명하고 윤리적인 비즈니스 관행을 최우선 가치로 삼습니다.',
    },
    {
      icon: 'target',
      title: 'Excellence',
      desc: '최고 수준의 전문성과 결과물로 고객의 기대를 뛰어넘습니다.',
    },
    {
      icon: 'handshake',
      title: 'Partnership',
      desc: '고객과 함께 성장하는 장기적 파트너십을 구축합니다.',
    },
  ],
}

export const servicesData = [
  {
    id: 'strategy',
    icon: 'chess',
    title: '전략 컨설팅',
    subtitle: 'Strategic Advisory',
    desc: '시장 분석, 경쟁 전략 수립, 신규 사업 진출 전략 등 기업의 핵심 의사결정을 지원합니다.',
    features: ['성장 전략 수립', '시장 진입 전략', '경쟁 포지셔닝', '포트폴리오 최적화'],
  },
  {
    id: 'digital',
    icon: 'cpu',
    title: '디지털 트랜스포메이션',
    subtitle: 'Digital Transformation',
    desc: 'AI, 클라우드, 데이터 분석을 활용한 디지털 혁신 전략을 설계하고 실행합니다.',
    features: ['DX 로드맵 수립', 'AI/ML 전략', '클라우드 마이그레이션', '데이터 거버넌스'],
  },
  {
    id: 'mna',
    icon: 'building',
    title: 'M&A 자문',
    subtitle: 'Mergers & Acquisitions',
    desc: '인수합병, 기업 구조조정, 실사(Due Diligence) 등 거래 전 과정을 자문합니다.',
    features: ['딜 소싱 & 평가', '재무 실사', 'PMI 전략', '기업 가치 평가'],
  },
  {
    id: 'operations',
    icon: 'settings',
    title: '운영 혁신',
    subtitle: 'Operational Excellence',
    desc: '프로세스 최적화, 조직 설계, 비용 효율화를 통해 운영 역량을 강화합니다.',
    features: ['프로세스 리엔지니어링', '조직 효율화', '공급망 최적화', '성과 관리 체계'],
  },
]

export const expertiseData = {
  tagline: 'Industry Expertise',
  headline: '깊은 산업 전문성',
  industries: [
    { name: '금융 & 보험', percentage: 92 },
    { name: '제조 & 산업재', percentage: 88 },
    { name: 'IT & 테크', percentage: 95 },
    { name: '헬스케어 & 바이오', percentage: 85 },
    { name: '에너지 & 인프라', percentage: 80 },
    { name: '유통 & 소비재', percentage: 87 },
  ],
}

export const teamData = [
  {
    name: '김도현',
    role: 'Managing Partner',
    bio: 'McKinsey & Company 출신. 20년 이상의 전략 컨설팅 경험. 서울대 경영학, Wharton MBA.',
    initials: 'DH',
  },
  {
    name: '이서연',
    role: 'Partner, Digital Practice',
    bio: 'Google, BCG Digital Ventures 출신. AI 및 디지털 전략 전문가. KAIST 전산학, MIT Sloan.',
    initials: 'SY',
  },
  {
    name: '박준영',
    role: 'Partner, M&A Advisory',
    bio: 'Goldman Sachs, Bain & Company 출신. 50건 이상의 M&A 딜 자문 경험. 연세대 경제학, HBS.',
    initials: 'JY',
  },
  {
    name: '최하은',
    role: 'Partner, Operations',
    bio: 'Deloitte Consulting 출신. 운영 혁신 및 조직 설계 전문. 고려대 산업공학, INSEAD.',
    initials: 'HE',
  },
]

export const contactData = {
  tagline: 'Get in Touch',
  headline: '함께 시작하세요',
  description:
    '비즈니스 과제에 대한 맞춤형 솔루션을 제안해 드립니다. 아래 양식을 통해 문의하시면, 담당 파트너가 24시간 내에 연락드리겠습니다.',
  info: [
    { icon: 'mapPin', label: '서울 강남구 테헤란로 427, APEX Tower 38F' },
    { icon: 'phone', label: '+82 2-555-0100' },
    { icon: 'mail', label: 'contact@apexpartners.co.kr' },
  ],
}
