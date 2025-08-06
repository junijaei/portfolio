import Title from '@/component/Title';
import { LucideMail, LucideNotepadText } from 'lucide-react';
import ContactButton from '@/component/ContactButton';
import Introduction from '@/component/Introduction';
import IntroChips from '@/component/IntroChips';
import PointText from '@/component/PointText';
import Experience from '@/component/section/experience/Experience';
import Section from '@/component/Section';
import Competencies from '@/component/section/competency/Competencies';
import Skills from '@/component/section/Skills';
import { competencies, experience, projects, skills } from '@/data';
import Projects from '@/component/section/projects/Projects';
import Blog from '@/component/section/Blog';
import blogs from '@/data/blogs';

export default function Home() {
  return (
    <>
      <div className={'max-w-(--breakpoint-lg) mx-auto flex flex-col gap-20'}>
        <div className={'flex flex-col gap-4'}>
          <IntroChips />
          <div>
            <p className={'text-content-500 text-8xl'}>프론트엔드 개발자</p>
            <h1 className={'text-8xl'}>
              전희재입니다<PointText>.</PointText>
            </h1>
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
              fill={'var(--color-content-100)'}
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
        <hr className={'text-surface-300'} />
        <Section>
          <Title>핵심 역량</Title>
          <Competencies competencies={competencies} />
        </Section>
        <hr className={'text-surface-300'} />
        <Section>
          <Title>기술</Title>
          <Skills skills={skills} />
        </Section>
        <hr className={'text-surface-300'} />
        <Section>
          <Title>경력</Title>
          <Experience experiences={experience} />
        </Section>
        <hr className={'text-surface-300'} />
        <Section>
          <Title>프로젝트</Title>
          <Projects projects={projects} />
        </Section>
        <hr className={'text-surface-300'} />
        <Section>
          <Title>기록</Title>
          <Blog blogs={blogs} />
        </Section>
        <hr className={'text-surface-300'} />
        <p className={'text-center text-4xl font-bold'}>
          감사합니다<PointText>.</PointText>
        </p>
      </div>
    </>
  );
}
