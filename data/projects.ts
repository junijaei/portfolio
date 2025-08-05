import { Project } from '@/types';

export const projects: Project[] = [
  {
    name: '한끼공식',
    period: '2025.02 ~ 2025.06 (4개월)',
    summary:
      '냉장고에 남아있는 재료를 조합해 맞춤형 레시피를 추천하는 웹 플랫폼',
    image: '/images/hankkiformula_h.png',
    links: [
      {
        label: '사이트',
        url: 'https://hankkiformula.com',
      },
    ],
    details: [
      {
        label: '기술스택',
        value:
          'React, Next.js, TypeScript, Axios, TanStack Query, MSW, Orval, TailwindCSS, ESLint, Prettier, Vitest, Husky, Faker',
      },
      {
        label: '역할',
        value: '프론트엔드 개발 (팀장)',
      },
      {
        label: '주요 업무',
        value: [
          '서비스 전반 기획 및 프론트엔드 구현 주도',
          'ARIA, 시멘틱 태그 등 웹 접근성 표준을 준수한 마크업 작성',
          'TanStack Query 및 Axios를 활용한 효율적인 API 호출과 클라이언트 상태 관리',
          'Figma 기반 디자인 구현 및 디자이너와의 협업',
          'GitHub Actions와 Husky를 활용한 테스트 자동화 및 코드 품질 관리',
          'Vercel 기반 CI/CD 파이프라인 구축 및 배포 자동화',
          'Discord 웹훅, Jira, GitHub Action을 이용한 이슈 및 PR 알림 시스템 개발',
        ],
      },
      {
        label: '성과',
        value: [
          '접근성 향상 및 UI 반응 속도 개선',
          '컴포넌트 테스트 커버리지 85% 이상 달성',
          '개인 프로젝트임에도 체계적 개발 프로세스 도입으로 높은 유지보수성 확보',
        ],
      },
    ],
  },
  {
    name: '구키',
    summary: '국비 교육 정보 허브 및 교육생 커뮤니티',
    period: '2023.04 ~ 2023.07 (3개월)',
    image: '/images/gookie_h.png',
    links: [
      {
        label: '깃허브',
        url: 'https://github.com/cst52o/Gookie',
      },
    ],
    details: [
      {
        label: '기술스택',
        value: 'JavaScript, Thymeleaf',
      },
      {
        label: '역할',
        value: '풀스택 웹 개발 (팀장)',
      },
      {
        label: '주요 업무',
        value: [
          '게시판 및 댓글 CRUD 기능 개발',
          'HRD-Net Open API를 활용한 교육 데이터 수집, 정제 및 분석',
          'PDF 파일 분석 및 텍스트 검증 시스템 구현',
          '카카오톡 공유 API 연동으로 게시글 공유 기능 개발',
        ],
      },
      {
        label: '성과',
        value: [
          '고용노동부 공공데이터 공모전 1차 합격',
          '한국 ICT 인재개발원 프로젝트 최우수상 수상',
        ],
      },
    ],
  },
  {
    name: 'FreezeMaze',
    summary: '공포 테마 3D 미로 탈출 웹 게임',
    period: '2023.03 ~ 2023.04 (1개월)',
    image: '/images/freezemaze_h.png',
    links: [
      {
        label: '깃허브',
        url: 'https://github.com/IdevKangTe/FreezeMaze',
      },
      {
        label: '사이트',
        url: 'https://idevkangte.github.io/FreezeMaze/',
      },
    ],
    details: [
      { label: '기술스택', value: 'JavaScript, Three.js' },
      { label: '역할', value: '전반적인 기획 및 3D 애니메이션 구현 (팀장)' },
      {
        label: '주요 업무',
        value: [
          'Three.js를 활용한 3D 미로 및 사용자 움직임 애니메이션 개발',
          '게임 흐름 및 사용자 경험 전반 기획',
        ],
      },
      {
        label: '성과',
        value: [
          '단기간 내 기술 습득과 창의적 3D UI 구현 능력 강화',
          '팀 내 프로젝트 리더로서 전반적인 개발 프로세스 관리 및 조율 역량 향상',
        ],
      },
    ],
  },
];
