import GalaxyDotsScene from '@/component/GalaxyDots';
import Card from '@/component/Card';
import Title from '@/component/Title';

export default function Home() {
  return (
    <>
      <GalaxyDotsScene />
      <div className={'font-dunggeunmo flex flex-col gap-10 p-8'}>
        <div className={'font-cafe24'}>
          <p className={'text-[200px]'}>Hello,</p>
          <p className={'text-[200px]'}>
            World <span className={'text-[#9EFF00]'}>!</span>
          </p>
        </div>
        <div>
          <p>
            안녕하세요, 새로운 기술을 빠르게 학습하고 실무에 적용해나가는 데
            강점을 가진 2년차 프론트엔드 개발자입니다.
          </p>
          <p>
            상용 서비스와 사이드프로젝트 모두에서 아키텍처 구성부터 개발 전반을
            주도한 경험이 있습니다.
          </p>
          <p>
            레거시 시스템을 React·Next.js 기반 SPA로 전환하며 유지보수성과
            확장성을 개선했고, 다양한 협업 경험을 통해 기획·디자인·백엔드와
            유기적으로 소통할 수 있는 역량을 갖췄습니다.
          </p>
          <p>지속적인 학습과 실전 적용을 통해 성장을 실현하고 있습니다.</p>
          <p>개인의 성장을 팀의 성과로 연결할 수 있는 환경을 찾고 있습니다.</p>
        </div>
        <section className={'flex flex-col gap-8'}>
          <Title>핵심 역량</Title>
          <div className={'flex items-stretch gap-8'}>
            <Card
              contents={[
                '상용 프로젝트와 사이드프로젝트 양쪽에서 프로젝트를 기획 초기 단계부터 참여해본 경험이 있습니다.',
                '실제 업무에서는 기술 스택 선정, 폴더 구조 설계, 공통 컴포넌트 아키텍처 등 프론트엔드 구조를 주도적으로 구성했고, 사이드프로젝트에서는 팀장을 맡아 초기 기획부터 화면 흐름, 개발 프로세스 세팅까지 전반을 책임졌습니다.',
              ]}
              title={'프로젝트 초기 설계 및 아키텍처 구성 경험'}
            />
            <Card
              contents={[
                'Thymeleaf, jQuery 기반의 기존 서비스를 React, Next.js 기반의 SPA 구조로 전환하며, 모듈화, 페이지 라우팅, API 연동, 상태 관리 등 전반적인 구조 리팩토링을 수행해 유지보수성과 확장성을 개선했습니다.',
                '기술적 한계를 인식하고 대안을 설계·구현함으로써, 부서 전용 템플릿을 직접 구축한 실전 경험이 있습니다.',
              ]}
              title={'레거시 시스템의 대규모 리팩토링 경험'}
            />
            <Card
              contents={[
                '기획자, 디자이너, 백엔드 개발자와의 협업 과정에서 요구사항 정의, UI/UX 검토, API 명세 작성 및 수정 등을 적극 주도하며 유관 부서와 원활한 커뮤니케이션을 유지한 경험이 있습니다.',
              ]}
              title={'기획·디자인·백엔드와의 협업 경험'}
            />
          </div>
        </section>
        <section className={'flex flex-col gap-8'}>
          <Title>기술</Title>
          <div></div>
        </section>
      </div>
    </>
  );
}
