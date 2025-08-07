import { ReactNode } from 'react';
import clsx from 'clsx';

export default function ContactButton({
  link,
  children,
  isCompact = false,
}: {
  link: string;
  children: ReactNode;
  isCompact?: boolean;
}) {
  return (
    <a
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
