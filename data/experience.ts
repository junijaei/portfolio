import { ExperienceItem } from '@/types/experience';

const experience: ExperienceItem[] = [
  {
    company: '지넥슨',
    period: '2023.08 ~ 현재',
    works: [
      {
        name: '베이스 어드민 템플릿 프로젝트',
        period: '2024.06 ~ 2024.08',
        summary:
          '기존 레거시 어드민 프로젝트의 유지보수 한계를 보완하기 위해 최신 기술 스택 기반 어드민 템플릿을 단독 개발, 부서 내 표준 템플릿으로 자리잡음',
        details: [
          {
            label: '기술스택',
            value:
              'Vue.js, Nuxt, TypeScript, Pinia, TailwindCSS, ESLint, Prettier',
          },
          { label: '역할', value: '프론트엔드 단독 개발' },
          {
            label: '주요 업무',
            value: [
              '프로젝트 초기 세팅부터 배포까지 전반적인 프론트엔드 개발 전담',
              '디자인 시스템 기반 UI 컴포넌트 설계 및 재사용 가능한 컴포넌트 구현',
              '페이지 레이아웃 UI 구현',
            ],
          },
          {
            label: '성과',
            value: [
              '해당 템플릿을 4개 이상의 프로젝트에서 베이스 프로젝트로 활용하여 개발 효율성 극대화',
              '불필요한 코드 제거와 유지보수 비용 감소를 통해 업무 효율을 크게 향상',
              '완성된 템플릿 프로젝트는 외부 업체에 제품으로 판매되어 부서의 수익 증대에 기여',
            ],
          },
        ],
      },
      {
        name: '보험 상품 비교 추천 사이트',
        period: '2024.04 ~ 현재',
        summary:
          '국내 보험대리점 대상 검색 조건에 일치하는 보험 상품 비교 추천',
        details: [
          {
            label: '기술스택',
            value:
              'Vue.js, Axios, Vuex, Sass, ESLint, Prettier, Java, SpringBoot 3',
          },
          {
            label: '역할',
            value:
              '프론트엔드 전반 설계 및 구현 담당, 일부 백엔드 기능 개발 병행',
          },
          {
            label: '주요 업무',
            value: [
              '보험 상품 조회 및 PDF 출력 기능 구현',
              'SSO 로그인과 권한 관리 기능 개발',
              'Refresh token 기반 인증 로직 및 AOP 활용 로깅, API 개발 등 백엔드 핵심 로직 구현',
              '백엔드 및 타 프로젝트 팀과의 협업을 위해 API 명세 작성 및 문서화 주도',
              '원활한 개발을 위한 기술 인터페이스 관리 및 조율 역할 수행',
            ],
          },
          {
            label: '성과',
            value: [
              '안정적인 SSO 연동 및 권한 관리 구현',
              'API 문서화 및 협업 프로세스 개선으로 팀 간 커뮤니케이션 효율 상승',
              '핵심 백엔드 로직 직접 개발로 시스템 신뢰성 및 유지보수성 향상',
            ],
          },
        ],
      },
      {
        name: '국내 보험사 데이터 기반 통계 분석 시각화 사이트',
        period: '2024.01 ~ 현재',
        summary:
          '기존 Thymeleaf, jQuery로 구성되어있던 레거시 페이지를 React, Next.js, Typescript 등으로 리팩토링',
        details: [
          {
            label: '기술스택',
            value:
              'React, Next.js, TypeScript, SWR, TailwindCSS, ESLint, Prettier',
          },
          {
            label: '역할',
            value:
              '프론트엔드 전반 설계 및 구현 담당, 일부 백엔드 기능 개발 병행',
          },
          {
            label: '주요 업무',
            value: [
              '기존 jQuery 기반 시스템을 React 컴포넌트 구조로 전환하여 유지보수성과 재사용성 향상',
              '기획 파트와 협업해 UX 개선, 사용자 경험 최적화',
              '40여 개 페이지에 대한 UI 마크업, 컴포넌트 설계, 라우팅 및 상태 관리, API 연동 업무 주도',
              'TailwindCSS와 Flowbite 기반 디자인 시스템 구축 및 일관성 유지',
              'SSR과 CSR이 혼합된 Next.js 환경에서 Routing 및 API 레이어 구조 설계 및 적용',
              '백엔드 일부 로직 및 API 직접 구현',
            ],
          },
          {
            label: '성과',
            value: [
              '대규모 코드 리팩토링 및 SPA 전환을 성공적으로 수행하여 개발 생산성 및 사용자 경험 개선',
              'TailwindCSS 및 Flowbite 활용해 UI 일관성 확보 및 유지보수 비용 절감',
            ],
          },
        ],
      },
    ],
  },
];

export default experience;
