'use client';

import { ExperienceItem, WorkDetail } from '@/types/experience';
import { useState } from 'react';
import { LucideChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

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
          className={'flex gap-8'}
        >
          <div className={'flex flex-col gap-2'}>
            <p className={'whitespace-nowrap text-2xl'}>{experience.company}</p>
            <p className={'whitespace-nowrap dark:text-zinc-600'}>
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
                  <div className={'point-text text-sm'}>●</div>
                  <motion.div
                    className="h-full w-[1px] dark:bg-zinc-700"
                    layout={'size'}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div
                  className={
                    'flex w-full flex-col gap-4 pb-4 dark:text-zinc-300'
                  }
                >
                  <p className={'flex items-center gap-4'}>
                    <span className={'text-2xl font-bold dark:text-zinc-100'}>
                      {work.name}
                    </span>
                    <span className={'text-sm dark:text-zinc-600'}>
                      {work.period}
                    </span>
                  </p>
                  {work.summary && (
                    <p className={'break-keep dark:text-zinc-500'}>
                      {work.summary}
                    </p>
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

function Accordion({
  workName,
  details,
}: {
  workName: string;
  details: WorkDetail[];
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div
      className={clsx(
        '-mt-2 flex flex-col items-start gap-2 overflow-hidden rounded-lg p-2',
        isOpen
          ? 'w-full dark:bg-zinc-800/50'
          : 'w-fit border dark:border-zinc-700',
      )}
    >
      <button
        className={'inline-flex-center cursor-pointer gap-1'}
        onClick={toggleOpen}
      >
        <LucideChevronDown
          className={clsx(
            'h-5 w-5 transition duration-500',
            isOpen && 'rotate-180',
          )}
        />
        상세 정보 {isOpen ? '닫기' : '열기'}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <>
            <motion.div
              animate={{ width: '100%' }}
              className={'h-[1px] dark:bg-zinc-700'}
              initial={{ width: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.ul
              animate={{ opacity: 1, translateY: 0 }}
              className={'ml-2 flex origin-top flex-col gap-2'}
              initial={{ opacity: 0, translateY: -10 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.3,
              }}
            >
              {details.map(detail => (
                <li
                  key={workName + detail.label}
                  className={'flex flex-col gap-1'}
                >
                  <Detail
                    content={detail.value}
                    title={detail.label}
                  />
                </li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function Detail({
  title,
  content,
}: {
  title: string;
  content: string | string[];
}) {
  return (
    <>
      <p className={'dark:text-zinc-500'}>{title}</p>
      {Array.isArray(content) ? (
        <ul className={'ml-2 flex flex-col gap-1'}>
          {content.map((c, index) => (
            <li key={index}>· {c}</li>
          ))}
        </ul>
      ) : (
        <p className={'ml-2'}>{content}</p>
      )}
    </>
  );
}
