# generalEnv

`Flutter(WebView) + Vue 3 + Nest.js + MongoDB` 기반 사이드프로젝트 템플릿.

## 폴더 구조
- `app/` Flutter WebView 래퍼 (권한/네이티브 브릿지만 담당)
- `frontend/` Vue 3 (Vite + TS + Pinia + Router + Naive UI + VeeValidate + Zod + Tailwind)
- `backend/` Nest.js API (Mongoose + Swagger + ValidationPipe)
- `infra/` 로컬 실행용 Docker (MongoDB, Redis)
- `docs/`, `design/` 요구사항/스펙/디자인 가이드

## 로컬 실행
- Infra: `cd infra && docker compose up -d`
- Backend: `cd backend && npm i && cp .env.example .env && npm run start:dev`
- Frontend: `cd frontend && npm i && npm run dev`

## 기본 규칙
- Web(프론트)에서 카메라/사진/위치 권한을 직접 요청하지 않고, Flutter에서만 처리
- DTO/스키마를 먼저 정의하고 그 타입을 기준으로 서버/프론트 구현
