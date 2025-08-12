import CubeRefactoring from '@/component/section/competency/cubes/CubeRefactoring';
import CubeMerging from '@/component/section/competency/cubes/CubeMerging';
import Scene from '@/component/cube-animation/Scene';
import CubeGroup from '@/component/cube-animation/CubeGroup';
import CubeBuilding from '@/component/section/competency/cubes/CubeBuilding';

const CUBE_ANIMATIONS = {
  building: {
    component: <CubeBuilding />,
    alt: '점으로 이루어진 정육면체가 조금씩 생성되는 애니메이션',
  },
  refactoring: {
    component: <CubeRefactoring />,
    alt: '점으로 이루어진 정육면체가 흐릿한 상태에서 점점 뚜렷하게 변하는 애니메이션',
  },
  cooperation: {
    component: <CubeMerging />,
    alt: '점으로 이루어진 정육면체 세개가 모여 합쳐지는 애니메이션',
  },
} as const;

export default function CubeAnimation({
  animationKey,
}: {
  animationKey: keyof typeof CUBE_ANIMATIONS;
}) {
  return (
    <Scene
      aria-label={CUBE_ANIMATIONS[animationKey].alt}
      role={'img'}
    >
      <CubeGroup>{CUBE_ANIMATIONS[animationKey].component}</CubeGroup>
    </Scene>
  );
}
