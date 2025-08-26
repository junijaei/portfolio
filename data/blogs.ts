import { Blog } from '@/types/blog';

export const blogs: Blog[] = [
  {
    title: '리액트 바텀시트 컴포넌트 제작기 (feat. framer-motion)',
    summary:
      'React와 Framer-motion을 이용한 웹 사이트 전용 바텀시트 컴포넌트 제작 과정',
    link: 'https://junijaei.tistory.com/13',
    thumbnail: '/images/blogs/bottomsheet.png',
  },
  {
    title: 'Three.js 컴포넌트를 React로 구현하고 구조화해보기',
    summary:
      '웹 페이지에 3D 애니메이션을 구현한 방법과 반복되는 로직을 공통화한 흐름에 대한 설명',
    link: 'https://junijaei.tistory.com/12',
    thumbnail: '/images/blogs/cube.png',
  },
  {
    title: '[트러블 슈팅] Nuxt.js 리프레시 토큰 권한 오류 수정',
    summary:
      '리프레시 토큰을 재발급 받는 중, 응답 데이터가 반환되지 않는 문제의 원인을 분석하고 해결한 과정',
    link: 'https://junijaei.tistory.com/9',
    thumbnail: '/images/blogs/token.png',
  },
  {
    title: '자바스크립트의 호이스팅과 TDZ에 대해서 알아보자',
    summary:
      '자바스크립트의 호이스팅에 대한 기초 지식과 let, const, var 각 변수에서의 호이스팅 동작 차이, TDZ의 정의에 대해 설명한 글',
    link: 'https://junijaei.tistory.com/6',
    thumbnail: '/images/blogs/hoisting.png',
  },
];
