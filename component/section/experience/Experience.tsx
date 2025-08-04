'use client';

import { ExperienceItem } from '@/types/experience';
import Accordion from '@/component/section/experience/Accordion';

export default function Experience({
  experiences,
}: {
  experiences: ExperienceItem[];
}) {
  return (
    <div className={'mx-12'}>
      {experiences.map(experience => (
        <div
          key={experience.company}
          className={'flex gap-8'}
        >
          <div className={'flex flex-col gap-2'}>
            <p className={'whitespace-nowrap text-2xl'}>{experience.company}</p>
            <p className={'text-content-500 whitespace-nowrap'}>
              {experience.period}
            </p>
          </div>
          <ul className={'flex flex-col'}>
            {experience.works.map(work => (
              <li
                key={work.name}
                className={'flex gap-4'}
              >
                <div className={'mt-1.5 flex flex-col items-center'}>
                  <div className={'text-surface-500 text-sm'}>●</div>
                  <div className="bg-surface-200 h-full w-[1px]" />
                </div>
                <div
                  className={'text-content-100 flex w-full flex-col gap-4 pb-4'}
                >
                  <p className={'flex items-center gap-4'}>
                    <span className={'text-content text-2xl font-bold'}>
                      {work.name}
                    </span>
                    <span className={'text-content-500 text-sm'}>
                      {work.period}
                    </span>
                  </p>
                  {work.summary && (
                    <p className={'break-keep'}>{work.summary}</p>
                  )}
                  <Accordion
                    details={work.details}
                    workName={work.name}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
