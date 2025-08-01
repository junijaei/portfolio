import { ReactNode } from 'react';
import clsx from 'clsx';

export default function PointText({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <span className={clsx('point-text', className)}>{children}</span>;
}
