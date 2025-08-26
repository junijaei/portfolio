'use client';

import { useTypewriter } from '@/component/section/intro/useTypewriter';

export default function IntroChips({ texts }: { texts: string[] }) {
  const displayText = useTypewriter(texts);
  return (
    <div
      className={
        'text-surface-500 ml-2 flex items-center gap-2 text-sm lg:text-base'
      }
    >
      <div
        aria-hidden={true}
        className={'relative h-2 w-2'}
      >
        <div
          className={'bg-primary absolute h-2 w-2 animate-ping rounded-full'}
        />
        <div className={'bg-primary absolute h-2 w-2 rounded-full'} />
      </div>
      {displayText}
    </div>
  );
}
