import IntroChips from '@/component/section/intro/IntroChips';
import PointDot from '@/component/PointDot';
import ContactButtons from '@/component/contact/ContactButtons';

export default function Intro({
  jobDebugLogs,
  introduction,
}: {
  jobDebugLogs: string[];
  introduction: string;
}) {
  return (
    <>
      <div className={'flex flex-col gap-4 pt-8 lg:pt-0'}>
        <IntroChips texts={jobDebugLogs} />
        <header>
          <p
            className={
              'text-content-500 break-keep pb-2 text-4xl font-bold lg:text-8xl lg:font-medium'
            }
          >
            프론트엔드 개발자
          </p>
          <h1 className={'text-5xl font-bold lg:text-8xl lg:font-medium'}>
            전희재입니다
            <PointDot />
          </h1>
        </header>
      </div>
      <ContactButtons />
      <article className={'text-content-300 break-keep lg:text-lg'}>
        <p className={'whitespace-pre-wrap'}>{introduction}</p>
      </article>
    </>
  );
}
