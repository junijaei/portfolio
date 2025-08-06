import { ReactNode } from 'react';
import PointText from '@/component/PointText';

export default function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className={'text-3xl font-bold lg:text-5xl'}>
      {children}
      <PointText>.</PointText>
    </h2>
  );
}
