import PointText from '@/component/PointText';
import Experience from '@/component/section/experience/Experience';
import Section from '@/component/Section';
import Competencies from '@/component/section/competency/Competencies';
import Skills from '@/component/section/Skills';
import {
  blogs,
  competencies,
  experience,
  introTexts,
  projects,
  skills,
} from '@/data';
import Projects from '@/component/section/Projects';
import Blog from '@/component/section/Blog';
import Intro from '@/component/intro/Intro';
import ContactButtons from '@/component/contact/ContactButtons';
import Navigator from '@/component/navigator/Navigator';

export default function Home() {
  return (
    <>
      <Navigator />
      <main
        className={
          'max-w-(--breakpoint-lg) mx-auto flex flex-col gap-12 lg:gap-20'
        }
      >
        <Intro introTexts={introTexts} />
        <hr className={'text-surface-300'} />
        <Section title={'핵심역량'}>
          <Competencies competencies={competencies} />
        </Section>
        <Section title={'기술'}>
          <Skills skills={skills} />
        </Section>
        <Section title={'경력'}>
          <Experience experiences={experience} />
        </Section>
        <Section title={'프로젝트'}>
          <Projects projects={projects} />
        </Section>
        <Section title={'기록'}>
          <Blog blogs={blogs} />
        </Section>
        <div className={'flex flex-col gap-12 py-12 lg:gap-20 lg:py-20'}>
          <p className={'text-center text-4xl font-bold'}>
            감사합니다<PointText>.</PointText>
          </p>
          <div className={'flex-center'}>
            <ContactButtons />
          </div>
        </div>
      </main>
    </>
  );
}
