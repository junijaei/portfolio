import { ProjectDetail } from '@/types';
import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';
import { LucideChevronDown } from 'lucide-react';
import Detail from '@/component/section/experience/Detail';

export default function Accordion({
  workName,
  details,
}: {
  workName: string;
  details: ProjectDetail[];
}) {
  const id = useId();
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
        aria-controls={id}
        aria-expanded={isOpen}
        className={'inline-flex-center cursor-pointer gap-1'}
        onClick={toggleOpen}
      >
        <LucideChevronDown
          aria-hidden={true}
          className={clsx(
            'text-primary h-5 min-h-5 w-5 min-w-5 shrink-0 transition duration-500',
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
              aria-hidden={true}
              className={'bg-surface-300 h-[1px]'}
              exit={{ width: 0, transition: { duration: 0 } }}
              initial={{ width: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.ul
              animate={{ opacity: 1, translateY: 0, height: 'auto' }}
              className={'ml-2 flex origin-top flex-col gap-2'}
              exit={{ opacity: 0, translateY: -10, height: 0 }}
              id={id}
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
