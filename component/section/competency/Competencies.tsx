import { Competency } from '@/types';
import { LucideQuote } from 'lucide-react';
import CubeAnimation from '@/component/cube-animation/CubeAnimation';

export default function Competencies({
  competencies,
}: {
  competencies: Competency[];
}) {
  return (
    <ul className={'flex flex-col gap-4 lg:gap-8'}>
      {competencies.map(competency => (
        <li
          key={competency.title}
          className={'flex flex-col lg:flex-row'}
        >
          <div className={'bg-surface-100 mx-auto aspect-square w-1/2 lg:w-52'}>
            <Scene>
              {competency.key === 'building' ? (
                <DotsBuilding />
              ) : competency.key === 'refactoring' ? (
                <CubeRefactoring />
              ) : (
                <CubeMerging />
              )}
            </Scene>
          </div>
          <article
            className={'flex flex-col gap-2 break-keep p-4 lg:grow lg:gap-4'}
          >
            <h3
              className={'flex whitespace-nowrap text-xl font-bold lg:text-2xl'}
            >
              <LucideQuote
                aria-hidden={true}
                className={'text-primary mr-2 h-6 w-6 rotate-180'}
              />
              {competency.title}
            </h3>
            <hr
              aria-hidden={true}
              className={'text-surface-300'}
            />
            <ul>
              {competency.content.map(line => (
                <li
                  key={line}
                  className={'text-content-100 pl-2'}
                >
                  · {line}
                </li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ul>
  );
}
