import { ReactNode } from 'react';

export default function ContactButton({ children }: { children: ReactNode }) {
  return (
    <div
      className={
        'flex-center gap-4 rounded-full px-7 py-4 dark:bg-zinc-800 dark:text-zinc-300'
      }
    >
      {children}
    </div>
  );
}
