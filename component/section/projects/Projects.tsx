'use client';

import { Project } from '@/types';
import Image from 'next/image';
import { LucideArrowUpRight } from 'lucide-react';
import Accordion from '@/component/section/experience/Accordion';

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <ul className={'flex flex-col gap-2'}>
      {projects.map(project => (
        <li
          key={project.name}
          className={'flex h-full gap-4'}
        >
          <div className={'flex w-1/3 flex-col gap-2'}>
            <h3 className={'whitespace-nowrap text-right text-2xl'}>
              {project.name}
            </h3>
            <p className={'text-content-500 whitespace-nowrap text-right'}>
              {project.period}
            </p>
          </div>
          <div className={'flex flex-col items-center'}>
            <div className={'text-surface-500 text-sm'}>●</div>
            <div className="bg-surface-200 h-full w-[1px]" />
          </div>
          <div
            className={'text-content-100 flex w-full grow flex-col gap-4 pb-4'}
          >
            <h4 className={'flex items-center gap-4'}>
              <span className={'text-content text-2xl font-bold'}>
                {project.name}
              </span>
              <span className={'text-content-500 text-sm'}>
                {project.period}
              </span>
            </h4>
            <div className={'flex min-w-52 items-start gap-2'}>
              {project.image && (
                <Image
                  unoptimized
                  alt={`${project.name} 프로젝트 사진`}
                  className={
                    'grayscale-50 object-cover transition hover:grayscale-0'
                  }
                  height={100}
                  src={project.image}
                  width={300}
                />
              )}
            </div>
            {project.links && (
              <div className={'flex gap-2'}>
                {project.links.map(link => (
                  <button
                    key={link.url}
                    className={
                      'bg-surface-100 hover:bg-surface-200 w-fit rounded-full py-1 pl-4 pr-3 transition'
                    }
                  >
                    <a
                      className={'inline-flex-center gap-1'}
                      href={link.url}
                      target={'_blank'}
                    >
                      {link.label}
                      <LucideArrowUpRight className={'h-5 w-5'} />
                    </a>
                  </button>
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
        </li>
      ))}
    </ul>
  );
}
