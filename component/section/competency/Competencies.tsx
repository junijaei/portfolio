import { Competency } from '@/types/Competency';
import { LucideQuote } from 'lucide-react';
import Scene from '@/component/section/competency/dots-animation/Scene';
import DotsBuilding from '@/component/section/competency/dots-animation/DotsBuilding';
import DotsRefactoring from '@/component/section/competency/dots-animation/DotsRefactoring';
import DotsMerging from '@/component/section/competency/dots-animation/DotsMerging';

export default function Competencies({
  competencies,
}: {
  competencies: Competency[];
}) {
  return (
    <div className={'flex w-full flex-col gap-8'}>
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
                <DotsRefactoring />
              ) : (
                <DotsMerging />
              )}
            </Scene>
          </div>
          <div className={'flex flex-col gap-4 break-keep p-4'}>
            <div className={'flex whitespace-nowrap text-2xl font-bold'}>
              <LucideQuote className={'text-primary mr-2 h-6 w-6 rotate-180'} />
              {competency.title}
            </div>
            <hr className={'text-surface-300'} />
            <ul>
              {competency.content.map(line => (
                <li key={line}>· {line}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
    // <div className={'flex gap-8'}>
    //   {competencies.map(competency => (
    //     <div
    //       key={competency.title}
    //       className={
    //         'bg-surface-100 relative flex basis-1/3 flex-col gap-4 overflow-hidden rounded-lg p-4'
    //       }
    //     >
    //       <LucideQuote className={'text-primary h-6 w-6 rotate-180'} />
    //       <p className={'text-center text-2xl font-bold'}>{competency.title}</p>
    //       <hr className={'text-surface-300'} />
    //       <ul className={'flex flex-col gap-2'}>
    //         {competency.content.map(line => (
    //           <li
    //             key={line}
    //             className={'text-content-100'}
    //           >
    //             · {line}
    //           </li>
    //         ))}
    //       </ul>
    //       {/*<div*/}
    //       {/*  className={*/}
    //       {/*    'bg-radial from-primary/70 to-surface absolute bottom-0 right-0 -z-10 h-52 w-52 translate-x-1/2 translate-y-1/2 rounded-full blur-3xl'*/}
    //       {/*  }*/}
    //       {/*/>*/}
    //     </div>
    //     // <div
    //     //   key={competency.title}
    //     //   className={'flex w-full flex-col gap-2'}
    //     // >
    //     //   <div className={'flex-center gap-2'}>
    //     //     <div className={'bg-surface-500 h-2 w-2 rounded-full'}></div>
    //     //     <div
    //     //       className={
    //     //         'bg-linear-to-r from-surface-300 to-surface h-[1px] w-full'
    //     //       }
    //     //     />
    //     //     <div className={'h-2 w-2 rounded-full bg-transparent'}></div>
    //     //   </div>
    //     //   <p className={'relative text-center text-xl font-bold'}>
    //     //     {competency.title}
    //     //     {/*<div*/}
    //     //     {/*  className={*/}
    //     //     {/*    'bg-primary absolute bottom-0 right-0 h-2 w-2 translate-x-1/2 translate-y-1/2 rounded-full'*/}
    //     //     {/*  }*/}
    //     //     {/*/>*/}
    //     //   </p>
    //     //   <div className={'flex-center gap-2'}>
    //     //     <div className={'h-2 w-2 rounded-full bg-transparent'}></div>
    //     //     <hr className={'text-surface-300 w-full'} />
    //     //     <div className={'bg-primary h-2 w-2 rounded-full'}></div>
    //     //   </div>
    //     //   {competency.content.map(line => (
    //     //     <p>{line}</p>
    //     //   ))}
    //     // </div>
    //   ))}
    // </div>
  );
}
