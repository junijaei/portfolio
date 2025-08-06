import type { Metadata } from 'next';
import '@/asset/globals.css';
import localFont from 'next/font/local';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: '전희재 포트폴리오',
  description: '프론트엔드 개발자 전희재 포트폴리오입니다.',
};

const pretendard = localFont({
  src: '../asset/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={clsx(pretendard.variable, '')}
      lang="en"
    >
      <body
        className={clsx(
          pretendard.className,
          'bg-surface text-content px-8 py-12 md:p-24',
        )}
      >
        {children}
      </body>
    </html>
  );
}
