'use client';

import { Project } from '@/types';
import Image from 'next/image';
import { LucideArrowUpRight } from 'lucide-react';
import Accordion from '@/component/section/experience/Accordion';
import { motion } from 'framer-motion';

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <ul className={'flex flex-col gap-2'}>
      {projects.map((project, index) => (
        <motion.li
          key={project.name}
          className={'flex h-full flex-col gap-4 lg:flex-row'}
          initial={{ opacity: 0, translateY: 20 }}
          transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, translateY: 0 }}
        >
          <div className={'hidden flex-col gap-2 lg:flex lg:w-1/3'}>
            <h3 className={'whitespace-nowrap text-right text-2xl'}>
              {project.name}
            </h3>
            <p className={'text-content-500 whitespace-nowrap text-right'}>
              {project.period}
            </p>
          </div>
          <div className={'flex gap-4'}>
            <div className={'flex flex-col items-center'}>
              <div className={'text-surface-500 text-sm'}>●</div>
              <div className="bg-surface-200 h-full w-[1px]" />
            </div>
            <div
              className={
                'text-content-100 flex w-full grow flex-col gap-2 pb-2 lg:gap-4 lg:pb-4'
              }
            >
              <h4
                className={'flex flex-col lg:flex-row lg:items-center lg:gap-4'}
              >
                <span className={'text-content text-2xl font-bold'}>
                  {project.name}
                </span>
                <span className={'text-content-500 text-sm'}>
                  {project.period}
                </span>
              </h4>
              {project.image && (
                <div className={'relative aspect-video w-full lg:w-52'}>
                  <Image
                    fill
                    unoptimized
                    alt={`${project.name} 프로젝트 사진`}
                    className={
                      'grayscale-100 object-cover transition hover:grayscale-0'
                    }
                    src={project.image}
                  />
                </div>
              )}
              {project.links && (
                <div className={'flex gap-2'}>
                  {project.links.map(link => (
                    <a
                      key={link.url}
                      className={
                        'bg-surface-100 hover:bg-surface-200 inline-flex-center w-fit gap-1 rounded-full py-1 pl-4 pr-3 transition'
                      }
                      href={link.url}
                      target={'_blank'}
                    >
                      {link.label}
                      <LucideArrowUpRight className={'h-5 w-5'} />
                    </a>
                  ))}
                </div>
              )}
              <div className={'flex flex-col'}>
                {project.summary && (
                  <p className={'break-keep'}>{project.summary}</p>
                )}
              </div>
              <Accordion
                details={project.details}
                workName={project.name}
              />
            </div>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}
