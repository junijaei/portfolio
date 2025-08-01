import { ReactNode } from 'react';

export default function Title({ children }: { children: ReactNode }) {
  return <p className={'text-5xl font-bold'}>{children}</p>;
}
