'use client';

import { LucideArrowUp, LucideSunMoon } from 'lucide-react';
import ScrollCircleProgress from '@/component/navigator/ScrollCircleProgress';
import { AnimatePresence, motion } from 'framer-motion';
import useScrollProgress from '@/component/navigator/useScrollProgress';
import { useTheme } from 'next-themes';
import NavigatorButton from '@/component/navigator/NavigatorButton';
import { useEffect } from 'react';

export default function Navigator() {
  const progress = useScrollProgress();

  const { resolvedTheme, setTheme } = useTheme();
  const toggleTheme = () =>
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');

  const goTop = () => {
    if (typeof window === 'undefined') return;
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    console.log(`
    ┻┳|
    ┳┻|___∧         ╭ ◜◝ ͡ ◜◝ ͡  ◜◝ ͡  ◜◝ ͡ ╮
    ┻┳|•ω •) . o O ( 방문해주셔서 감사합니다. )
    ┳┻| ⊂ﾉ         (     잘 부탁드립니다.    )
    ┻┳|Ｊ           ╰ ◟◞ ͜ ◟͜◟◞ ͜◟ ͜◟◞  ͜ ◟ ͜ ╯
    `);
  }, []);

  return (
    <AnimatePresence initial={false}>
      {progress > 0 && (
        <motion.aside
          animate={{ opacity: 1 }}
          className={
            'bg-surface-100/50 lg:bg-surface-100 fixed left-1/2 top-4 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm lg:left-4 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:flex-col lg:gap-4 lg:px-2 lg:py-4'
          }
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
        >
          <ScrollCircleProgress />
          <div
            aria-hidden={true}
            className={
              'bg-surface-300 w-[1px] self-stretch lg:h-[1px] lg:w-full'
            }
          />
          <NavigatorButton
            aria-label={`${resolvedTheme === 'dark' ? '라이트' : '다크'}모드로 전환하기`}
            onClick={toggleTheme}
          >
            <LucideSunMoon
              aria-hidden={true}
              className={'h-5 w-5 lg:h-6 lg:w-6'}
            />
          </NavigatorButton>
          <NavigatorButton
            aria-label={'맨 위로 이동'}
            onClick={goTop}
          >
            <LucideArrowUp
              aria-hidden={true}
              className={'h-5 w-5 lg:h-6 lg:w-6'}
            />
          </NavigatorButton>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
