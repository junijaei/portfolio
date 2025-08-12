import { ReactNode } from 'react';
import Title from '@/component/Title';

export default function Section({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <section className={'text- flex flex-col gap-8 lg:gap-12'}>
      {title && <Title>{title}</Title>}
      {children}
      <hr className={'text-surface-300'} />
    </section>
  );
}
