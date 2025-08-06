'use client';

import { ExperienceItem } from '@/types';
import Accordion from '@/component/section/experience/Accordion';

export default function Experience({
  experiences,
}: {
  experiences: ExperienceItem[];
}) {
  return (
    <>
      {experiences.map(experience => (
        <div
          key={experience.company}
          className={'flex flex-col gap-4 lg:flex-row lg:gap-8'}
        >
          <div className={'flex w-full flex-col gap-2 lg:w-1/3'}>
            <h3 className={'whitespace-nowrap text-right text-2xl'}>
              {experience.company}
            </h3>
            <p className={'text-content-500 whitespace-nowrap text-right'}>
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
                  className={
                    'text-content-100 flex w-full flex-col gap-2 pb-2 lg:gap-4 lg:pb-4'
                  }
                >
                  <h4
                    className={
                      'flex flex-col lg:flex-row lg:items-center lg:gap-4'
                    }
                  >
                    <span
                      className={
                        'text-content break-keep text-xl font-bold lg:text-2xl'
                      }
                    >
                      {work.name}
                    </span>
                    <span className={'text-content-500 text-sm'}>
                      {work.period}
                    </span>
                  </h4>
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
    </>
  );
}
