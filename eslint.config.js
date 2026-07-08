import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  // 빌드 결과물 폴더는 린트 검사에서 제외
  { ignores: ['dist'] },
  {
    // JS, TS 공식 권장 규칙 일괄 적용 (배열 전개 구문)
    extends: [js.configs.recommended, ...tseslint.configs.recommended],

    // 린트 적용할 파일 확장자 지정
    files: ['**/*.{ts,tsx}'],

    // 언어 환경 설정 (브라우저 전역 변수 허용 등)
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },

    // 사용할 외부 플러그인 등록
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },

    // 세부 규칙 커스텀
    rules: {
      ...reactHooks.configs.recommended.rules,
      // React 컴포넌트만 export 하도록 강제 (Fast Refresh 지원 목적)
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  // 다른 모든 규칙 중 코드 스타일 관련 사항 덮어쓰기
  eslintConfigPrettier
);
