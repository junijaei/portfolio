import { ReactNode } from 'react';

export default function Title({ children }: { children: ReactNode }) {
  return <p className={'text-3xl'}>● {children}</p>;
}
