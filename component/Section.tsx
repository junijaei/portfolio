import { ReactNode } from 'react';

export default function Section({ children }: { children: ReactNode }) {
  return <section className={'text- flex flex-col gap-12'}>{children}</section>;
}
