import { ReactNode } from 'react';
import clsx from 'clsx';

export default function ContactButton({
  label,
  link,
  children,
  isCompact = false,
}: {
  label: string;
  link: string;
  children: ReactNode;
  isCompact?: boolean;
}) {
  return (
    <a
      aria-label={`새 창에서 ${label} 열기`}
      className={clsx(
        'flex-center bg-surface-100 text-content-100 hover:bg-surface-200 w-fit gap-4 rounded-full p-4 transition',
        !isCompact && 'lg:px-7 lg:py-4',
      )}
      href={link}
      target={'_blank'}
    >
      {children}
    </a>
  );
}
