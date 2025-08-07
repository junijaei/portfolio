'use client';

import useScrollProgress from '@/component/navigator/useScrollProgress';

const RADIUS = 18;
const STROKE = 4;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ScrollCircleProgress() {
  const progress = useScrollProgress();
  const strokeDashoffset = CIRCUMFERENCE * (1 - progress);

  return (
    <svg
      height={RADIUS * 2 + STROKE}
      viewBox={`0 0 ${RADIUS * 2 + STROKE} ${RADIUS * 2 + STROKE}`}
      width={RADIUS * 2 + STROKE}
    >
      <circle
        className={'opacity-50'}
        cx={RADIUS + STROKE / 2}
        cy={RADIUS + STROKE / 2}
        fill="none"
        r={RADIUS}
        stroke="var(--color-content-300)"
        strokeWidth={STROKE}
      />
      <circle
        cx={RADIUS + STROKE / 2}
        cy={RADIUS + STROKE / 2}
        fill="none"
        r={RADIUS}
        stroke="var(--color-primary)" // Tailwind blue-500
        strokeDasharray={CIRCUMFERENCE}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        strokeWidth={STROKE}
        style={{ transition: 'stroke-dashoffset 0.1s linear' }}
      />
    </svg>
  );
}
