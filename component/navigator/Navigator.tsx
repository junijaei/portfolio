'use client';

import ContactButton from '@/component/contact/ContactButton';
import { LucideMail, LucideNotepadText } from 'lucide-react';
import GithubIcon from '@/component/GithubIcon';
import ScrollCircleProgress from '@/component/navigator/ScrollCircleProgress';
import { AnimatePresence, motion } from 'framer-motion';
import useScrollProgress from '@/component/navigator/useScrollProgress';

export default function Navigator() {
  const progress = useScrollProgress();
  return (
    <AnimatePresence initial={false}>
      {progress > 0 && (
        <motion.aside
          animate={{ opacity: 1 }}
          className={
            'bg-surface-100/50 fixed left-1/2 top-4 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm lg:left-4 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:flex-col lg:gap-4 lg:px-2 lg:py-4'
          }
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
        >
          <ScrollCircleProgress />
          <div
            className={
              'bg-surface-300 w-[1px] self-stretch lg:h-[1px] lg:w-full'
            }
          />
          <div className={'flex gap-2 lg:flex-col'}>
            <ContactButton
              isCompact={true}
              link={'mailto:hjhj7895598@gmail.com'}
            >
              <LucideMail className={'h-5 w-5 lg:h-6 lg:w-6'} />
            </ContactButton>
            <ContactButton
              isCompact={true}
              link={'https://github.com/junijaei'}
            >
              <GithubIcon className={'h-5 w-5 lg:h-6 lg:w-6'} />
            </ContactButton>
            <ContactButton
              isCompact={true}
              link={'https://junijaei.tistory.com/'}
            >
              <LucideNotepadText className={'h-5 w-5 lg:h-6 lg:w-6'} />
            </ContactButton>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
