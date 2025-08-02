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
                    <span className={'text-content-primary text-2xl font-bold'}>
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
    <motion.div
      animate={{ width: '100%' }}
      className={clsx(
        '-mt-2 flex flex-col items-start gap-2 overflow-hidden rounded-lg p-2',
        isOpen ? 'bg-surface-100' : '',
      )}
      exit={{ width: 'fit-content' }}
      initial={{ width: 'fit-content' }}
    >
      <button
        className={'inline-flex-center cursor-pointer gap-1'}
        onClick={toggleOpen}
      >
        <LucideChevronDown
          className={clsx(
            'text-content-500 h-5 min-h-5 w-5 min-w-5 shrink-0 transition duration-500',
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
              className={'bg-surface-300 h-[1px]'}
              exit={{ width: 0, transition: { duration: 0 } }}
              initial={{ width: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.ul
              animate={{ opacity: 1, translateY: 0, height: 'auto' }}
              className={'ml-2 flex origin-top flex-col gap-2'}
              exit={{ opacity: 0, translateY: -10, height: 0 }}
              initial={{ opacity: 0, translateY: -10, height: 0 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.3,
              }}
            >
              {details.map((detail, index) => (
                <motion.li
                  key={workName + detail.label}
                  animate={{ opacity: 1, x: 0 }}
                  className={'flex flex-col gap-1'}
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                >
                  <Detail
                    content={detail.value}
                    title={detail.label}
                  />
                </motion.li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </motion.div>
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
      <p className={'text-content-500'}>{title}</p>
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
