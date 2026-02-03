# 프로젝트 계획 (Project Plan)

## 1. 제안된 파일 구조

새로운 프로젝트는 다음과 같은 체계적인 파일 구조를 갖도록 계획합니다. '내가 작성한 코드'와 '외부 라이브러리 코드'를 명확히 분리하여 관리합니다.

### 1.1. CSS 파일 (웹 폴더 내 `css/` 디렉토리)

*   **`vendor.bundle.css`**: Swiper, AOS 등 **외부 라이브러리 CSS** 파일들의 내용을 통합한 파일.
*   **`app.bundle.css`**: 사용자님께서 직접 작성할 **내부 코드 CSS** 파일들(`base.css`, `layout.css`, `components.css`, `main-page.css` 등)을 통합한 파일.
    *   **`base.css`**: CSS 초기화, 폰트 설정, 색상 변수 지정 등 모든 페이지에 공통적으로 필요한 가장 기본적인 스타일.
    *   **`layout.css`**: 헤더, 푸터, 메인 컨테이너 등 페이지의 전체적인 '레이아웃'과 관련된 스타일.
    *   **`components.css`**: 버튼, 카드, 팝업, 폼 요소 등 재사용 가능한 '부품(컴포넌트)' 단위의 스타일.
    *   **`main-page.css`**: `index.html`처럼 특정 페이지에만 적용되는 고유한 스타일 (필요시).

### 1.2. JavaScript 파일 (웹 폴더 내 `js/` 디렉토리)

*   **`vendor.bundle.js`**: jQuery, Swiper, AOS 등 **외부 라이브러리 JavaScript** 파일들의 내용을 통합한 파일.
*   **`app.bundle.js`**: 사용자님께서 직접 작성할 **내부 코드 JavaScript** 파일들(`ui-common.js`, `main.js` 등)을 통합한 파일.
    *   **`ui-common.js`**: 메뉴 토글, 팝업 열기/닫기 등 여러 페이지에서 공통적으로 사용될 수 있는 UI 관련 스크립트.
    *   **`main.js`**: `index.html` 페이지의 슬라이더 초기화 등 해당 페이지에서만 필요한 기능들을 실행하고 관리하는 스크립트.

## 2. 개발 우선순위 및 핵심 집중 영역

사용자님의 능력 향상과 프로젝트의 견고한 기반 마련을 위해 다음 순서로 개발에 집중하는 것을 권장합니다.

1.  **HTML 구조 및 시맨틱 (Semantic HTML & Accessibility)**:
    *   **최우선:** 페이지의 뼈대이자 의미론적 기반. 웹 표준 준수 및 웹 접근성(A11y) 고려. 올바른 시맨틱 태그 사용, `aria` 속성 활용, `alt` 텍스트 명확화.
2.  **CSS 구조 및 설계 (CSS Architecture & Best Practices)**:
    *   **매우 중요:** 모듈화된 구조 (`base`, `layout`, `components` 분리)와 CSS 변수(Custom Properties)를 활용하여 예측 가능하고 유지보수하기 쉬운 CSS 코드 작성. 반응형 디자인 고려.
3.  **JavaScript 기능 및 효율성 (JavaScript Functionality & Efficiency)**:
    *   **중요:** 순수 JavaScript(Vanilla JS)를 사용하여 웹의 동작 원리를 깊이 이해하고 핵심 역량을 강화. jQuery 의존도 최소화. 효율적인 DOM 조작 및 이벤트 처리.

## 3. 추후 고려 사항

*   **자산 관리 및 최적화**: 이미지 최신 포맷(WebP), 반응형 이미지, 폰트 로딩 최적화 등 페이지 성능 향상.
*   **개발 워크플로우 (빌드/번들링 자동화)**: 프로젝트 규모가 커지면 Parcel, Webpack, Vite와 같은 번들러를 도입하여 CSS/JS 번들링 및 압축 과정을 자동화.
