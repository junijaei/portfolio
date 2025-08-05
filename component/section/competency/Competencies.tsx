import { Competency } from '@/types';
import { LucideQuote } from 'lucide-react';
import Scene from '@/component/cube-animation/Scene';
import DotsBuilding from '@/component/section/competency/cubes/CubeBuilding';
import CubeRefactoring from '@/component/section/competency/cubes/CubeRefactoring';
import CubeMerging from '@/component/section/competency/cubes/CubeMerging';

export default function Competencies({
  competencies,
}: {
  competencies: Competency[];
}) {
  return (
    <div className={'flex flex-col gap-8'}>
      {competencies.map(competency => (
        <div
          key={competency.title}
          className={'flex h-52'}
        >
          <div className={'bg-surface-100 h-52 w-52'}>
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
          <div className={'flex grow flex-col gap-4 break-keep p-4'}>
            <h3 className={'flex whitespace-nowrap text-2xl font-bold'}>
              <LucideQuote className={'text-primary mr-2 h-6 w-6 rotate-180'} />
              {competency.title}
            </h3>
            <hr className={'text-surface-300'} />
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
          </div>
        </div>
      ))}
    </div>
  );
}
