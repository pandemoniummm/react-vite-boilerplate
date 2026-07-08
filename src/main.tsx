import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
/*
@/ 절대경로 적용은 취향 차이!
엔트리 파일 시각적 응집도를 위해 적용하지 않았음
*/
import './index.css';

createRoot(document.getElementById('root')!).render(
  // 전역 라우팅 인프라 주입 (UI 레이아웃과 라우팅의 관심사 분리)
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
