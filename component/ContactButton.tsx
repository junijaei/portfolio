import { ReactNode } from 'react';

export default function ContactButton({ children }: { children: ReactNode }) {
  return (
    <div
      className={
        'flex-center bg-surface-100 text-content-100 hover:bg-surface-200 gap-4 rounded-full px-7 py-4'
      }
    >
      {children}
    </div>
  );
}
