import { ReactNode } from 'react';

export default function ContactButton({
  label,
  link,
  children,
}: {
  label: string;
  link: string;
  children: ReactNode;
}) {
  return (
    <a
      aria-label={`새 창에서 ${label} 열기`}
      className={
        'flex-center bg-surface-100 text-content-100 hover:bg-surface-200 w-fit gap-4 rounded-full p-4 transition lg:px-7 lg:py-4'
      }
      href={link}
      target={'_blank'}
    >
      {children}
    </a>
  );
}
