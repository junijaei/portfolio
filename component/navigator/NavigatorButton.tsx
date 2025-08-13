import { ButtonHTMLAttributes } from 'react';

export default function NavigatorButton({
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={
        'bg-surface-100 lg:bg-surface-200 text-content-100 hover:bg-surface-200 w-fit cursor-pointer gap-4 rounded-full p-4 transition'
      }
      {...rest}
    >
      {children}
    </button>
  );
}
