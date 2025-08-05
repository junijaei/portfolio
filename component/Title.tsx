import { ReactNode } from 'react';
import PointText from '@/component/PointText';

export default function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className={'text-5xl font-bold'}>
      {children}
      <PointText>.</PointText>
    </h2>
  );
}
