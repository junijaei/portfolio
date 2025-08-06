import IntroChips from '@/component/intro/IntroChips';
import PointText from '@/component/PointText';
import ContractButtons from '@/component/contract/ContractButtons';

export default function Intro() {
  return (
    <>
      <div className={'flex flex-col gap-4 pt-8 lg:pt-0'}>
        <IntroChips />
        <div>
          <p
            className={
              'text-content-500 break-keep pb-2 text-4xl font-bold lg:text-8xl lg:font-medium'
            }
          >
            프론트엔드 개발자
          </p>
          <h1 className={'text-5xl font-bold lg:text-8xl lg:font-medium'}>
            전희재입니다<PointText>.</PointText>
          </h1>
        </div>
      </div>
      <ContractButtons />
      <div className={'text-content-300 break-keep lg:text-lg'}>
        <p>
          안녕하세요, 새로운 기술을 빠르게 학습하고 실무에 적용하는 2년차
          프론트엔드 개발자입니다.
        </p>
        <p>지속적인 학습과 실전 적용을 통해 성장을 실현하고 있습니다.</p>
        <p>개인의 성장을 팀의 성과로 연결할 수 있는 환경을 찾고 있습니다.</p>
      </div>
    </>
  );
}
