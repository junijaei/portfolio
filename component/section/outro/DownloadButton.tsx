import { LucideCircleArrowDown } from 'lucide-react';

export default function DownloadButton({
  href,
  fileName,
}: {
  href: string;
  fileName: string;
}) {
  return (
    <a
      aria-label={'이력서 다운로드 받기'}
      className={
        'flex-center bg-surface-100 text-content-200 hover:bg-surface-200 mx-auto w-fit cursor-pointer gap-2 rounded-full py-2 pl-7 pr-5 leading-5 transition lg:leading-6'
      }
      download={fileName}
      href={href}
    >
      이력서 다운로드
      <LucideCircleArrowDown className={'text-primary h-5 w-5 lg:h-6 lg:w-6'} />
    </a>
  );
}
