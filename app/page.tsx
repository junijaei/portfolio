import Card from '@/component/Card';
import Title from '@/component/Title';
import { LucideMail, LucideNotepadText } from 'lucide-react';
import ContactButton from '@/component/ContactButton';
import Introduction from '@/component/Introduction';
import IntroChips from '@/component/IntroChips';
import PointText from '@/component/PointText';
import Experience from '@/component/Experience';
import experience from '@/data/experience';

export default function Home() {
  return (
    <>
      <div className={'max-w-(--breakpoint-md) mx-auto flex flex-col gap-20'}>
        <div className={'flex flex-col gap-4'}>
          <IntroChips />
          <div>
            <p className={'text-8xl dark:text-zinc-600'}>프론트엔드 개발자</p>
            <p className={'text-8xl'}>
              전희재입니다<PointText>.</PointText>
            </p>
          </div>
        </div>
        <div className={'flex gap-4'}>
          <ContactButton>
            <LucideMail className={'h-6 w-6'} />
            Email
          </ContactButton>
          <ContactButton>
            <svg
              className={'h-6 w-6'}
              fill={'#d4d4d8'}
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            GitHub
          </ContactButton>
          <ContactButton>
            <LucideNotepadText className={'h-6 w-6'} />
            Blog
          </ContactButton>
        </div>
        <Introduction />
        <hr className={'text-zinc-700 dark:text-zinc-600'} />
        <section className={'flex flex-col gap-12'}>
          <Title>경력</Title>
          <Experience experiences={experience} />
        </section>
        <hr className={'text-zinc-700 dark:text-zinc-600'} />
        <section className={'flex flex-col gap-8'}>
          <Title>핵심 역량</Title>
          <div className={'flex items-stretch gap-8'}>
            <Card
              contents={[
                '상용 프로젝트와 사이드프로젝트 양쪽에서 프로젝트를 기획 초기 단계부터 참여해본 경험이 있습니다.',
                '실제 업무에서는 기술 스택 선정, 폴더 구조 설계, 공통 컴포넌트 아키텍처 등 프론트엔드 구조를 주도적으로 구성했고, 사이드프로젝트에서는 팀장을 맡아 초기 기획부터 화면 흐름, 개발 프로세스 세팅까지 전반을 책임졌습니다.',
              ]}
              title={'프로젝트 초기 설계 및 아키텍처 구성 경험'}
            />
            <Card
              contents={[
                'Thymeleaf, jQuery 기반의 기존 서비스를 React, Next.js 기반의 SPA 구조로 전환하며, 모듈화, 페이지 라우팅, API 연동, 상태 관리 등 전반적인 구조 리팩토링을 수행해 유지보수성과 확장성을 개선했습니다.',
                '기술적 한계를 인식하고 대안을 설계·구현함으로써, 부서 전용 템플릿을 직접 구축한 실전 경험이 있습니다.',
              ]}
              title={'레거시 시스템의 대규모 리팩토링 경험'}
            />
            <Card
              contents={[
                '기획자, 디자이너, 백엔드 개발자와의 협업 과정에서 요구사항 정의, UI/UX 검토, API 명세 작성 및 수정 등을 적극 주도하며 유관 부서와 원활한 커뮤니케이션을 유지한 경험이 있습니다.',
              ]}
              title={'기획·디자인·백엔드와의 협업 경험'}
            />
          </div>
        </section>
        <section className={'flex flex-col gap-8'}>
          <Title>기술</Title>
        </section>
      </div>
    </>
  );
}
