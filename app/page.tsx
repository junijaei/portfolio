import Title from '@/component/Title';
import PointText from '@/component/PointText';
import Experience from '@/component/section/experience/Experience';
import Section from '@/component/Section';
import Competencies from '@/component/section/competency/Competencies';
import Skills from '@/component/section/Skills';
import { competencies, experience, projects, skills, blogs } from '@/data';
import Projects from '@/component/section/Projects';
import Blog from '@/component/section/Blog';
import Intro from '@/component/intro/Intro';
import ContactButtons from '@/component/contact/ContactButtons';
import Navigator from '@/component/navigator/Navigator';

export default function Home() {
  return (
    <>
      <Navigator />
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
        <div className={'flex flex-col gap-12 py-12 lg:gap-20 lg:py-20'}>
          <p className={'text-center text-4xl font-bold'}>
            감사합니다<PointText>.</PointText>
          </p>
          <div className={'flex-center'}>
            <ContactButtons />
          </div>
        </div>
      </div>
    </>
  );
}
