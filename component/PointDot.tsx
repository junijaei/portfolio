import clsx from 'clsx';

export default function PointDot({ className }: { className?: string }) {
  return <span className={clsx('text-primary', className)}>.</span>;
}
