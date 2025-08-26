import PointDot from '@/component/PointDot';
import ContactButtons from '@/component/contact/ContactButtons';

export default function Outro() {
  return (
    <div className={'flex flex-col gap-12 py-12 lg:gap-20 lg:py-20'}>
      <p className={'text-center text-4xl font-bold'}>
        감사합니다
        <PointDot />
      </p>
      <div className={'flex-center'}>
        <ContactButtons />
      </div>
    </div>
  );
}
