import Experience from '@/component/section/experience/Experience';
import Section from '@/component/Section';
import Competencies from '@/component/section/competency/Competencies';
import Skill from '@/component/section/skill/Skill';
import {
  blogs,
  competencies,
  experience,
  introduction,
  jobDebugLogs,
  projects,
  skills,
} from '@/data';
import Projects from '@/component/section/Projects';
import Blog from '@/component/section/Blog';
import Intro from '@/component/section/intro/Intro';
import Outro from '@/component/section/Outro';

export default function Home() {
  return (
    <>
      <main
        className={
          'max-w-(--breakpoint-lg) mx-auto flex flex-col gap-12 lg:gap-20'
        }
      >
        <Intro
          introduction={introduction}
          jobDebugLogs={jobDebugLogs}
        />
        <hr className={'text-surface-300'} />
        <Section title={'핵심역량'}>
          <Competencies competencies={competencies} />
        </Section>
        <Section title={'기술'}>
          <Skill skills={skills} />
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
        <Outro />
      </main>
    </>
  );
}
