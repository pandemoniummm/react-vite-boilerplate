import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
/*
@/ 절대경로 적용은 취향 차이!
엔트리 파일 시각적 응집도를 위해 적용하지 않았음
*/
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
