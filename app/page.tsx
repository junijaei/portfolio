import Title from '@/component/Title';
import PointText from '@/component/PointText';
import Experience from '@/component/section/experience/Experience';
import Section from '@/component/Section';
import Competencies from '@/component/section/competency/Competencies';
import Skills from '@/component/section/Skills';
import { competencies, experience, projects, skills } from '@/data';
import Projects from '@/component/section/Projects';
import Blog from '@/component/section/Blog';
import blogs from '@/data/blogs';
import Intro from '@/component/intro/Intro';

export default function Home() {
  return (
    <>
      <div
        className={
          'max-w-(--breakpoint-lg) mx-auto flex flex-col gap-12 lg:gap-20'
        }
      >
        <Intro />
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
