import PointDot from '@/component/PointDot';
import ContactButtons from '@/component/contact/ContactButtons';
import DownloadButton from '@/component/section/outro/DownloadButton';

export default function Outro() {
  return (
    <div className={'flex flex-col py-12 lg:py-20'}>
      <p className={'mb-4 text-center text-4xl font-bold'}>
        감사합니다
        <PointDot />
      </p>
      <p className={'mb-4 text-center'}>
        더 궁금한 점이나 확인하고 싶은 사항이 있다면
        <br />
        언제든 연락 주시면 성실히 답변드리겠습니다.
      </p>
      <DownloadButton
        fileName={'FE_전희재_이력서.pdf'}
        href={'/FE_전희재_이력서.pdf'}
      />
      <div className={'flex-center mt-12 lg:mt-20'}>
        <ContactButtons />
      </div>
    </div>
  );
}
