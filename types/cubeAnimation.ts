import React from 'react';

export type CubeAnimationType = 'building' | 'refactoring' | 'cooperation';
export type CubeAnimations = Record<
  CubeAnimationType,
  {
    alt: string;
    Component: () => React.JSX.Element;
  }
>;
export type Phase = 'animate' | 'rotate' | 'hold';
