import { ReactNode } from 'react';

export default function ContactButton({
  link,
  children,
}: {
  link: string;
  children: ReactNode;
}) {
  return (
    <a
      className={
        'flex-center bg-surface-100 text-content-100 hover:bg-surface-200 w-fit gap-4 rounded-full p-4 lg:px-7 lg:py-4'
      }
      href={link}
      target={'_blank'}
    >
      {children}
    </a>
  );
}
