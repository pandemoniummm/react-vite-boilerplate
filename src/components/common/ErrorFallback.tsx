import type { FallbackProps } from 'react-error-boundary';

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  // TODO: 프로젝트 시작 시 디자인에 맞춰 에러 페이지 UI를 수정
  return (
    <div>
      <h2>Something went wrong.</h2>
      {/* error는 unknown 타입 (Error 외의 값도 throw 가능) -> Error 객체인지 확인 후 메시지 표시 */}
      {/* 주의: 배포 환경에서도 에러 메시지가 그대로 노출됨 -> 개발 환경에서만 표시하려면 아래 줄로 교체 */}
      {/* {import.meta.env.DEV && <p>{error instanceof Error ? error.message : String(error)}</p>} */}
      <p>{error instanceof Error ? error.message : String(error)}</p>

      {/* 기능적 가이드: 에러 초기화 및 재요청을 위해 resetErrorBoundary 함수를 버튼 클릭 이벤트에 반드시 바인딩해야 합니다. */}
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
