import type { Metadata } from 'next';
import '@/asset/globals.css';
import localFont from 'next/font/local';
import clsx from 'clsx';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: '전희재 포트폴리오',
  description: '프론트엔드 개발자 전희재 포트폴리오입니다.',
  keywords: ['전희재', '프론트엔드', '개발자', '포트폴리오'],
  openGraph: {
    title: '전희재 포트폴리오',
    description: '프론트엔드 개발자 전희재 포트폴리오입니다.',
    type: 'website',
    url: 'https://junijaei.co.kr',
    siteName: '전희재 포트폴리오',
    locale: 'ko_KR',
  },
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
      suppressHydrationWarning
      className={pretendard.variable}
      lang="en"
    >
      <body
        className={clsx(
          pretendard.className,
          'bg-surface text-content px-8 py-12 md:p-24',
        )}
      >
        <ThemeProvider attribute={'class'}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
