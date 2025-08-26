import { ReactNode } from 'react';
import PointDot from '@/component/PointDot';

export default function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className={'text-3xl font-bold lg:text-5xl'}>
      {children}
      <PointDot />
    </h2>
  );
}
