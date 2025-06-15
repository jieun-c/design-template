### my-app

---

### OpenAPI 기반 TypeScript 코드 생성

`openapi-generator`를 사용해 Swagger 스펙으로부터 TypeScript 코드를 생성합니다.

### 구성 파일

- `package.json`: 의존성 및 CLI 명령어
- `openapi-sample.json`: 생성 경로 설정 (`modelPackage`, `apiPackage` 등)
- `.env.development`: API 스펙 URL 설정
- `openapi.sh`: 코드 생성 실행 스크립트

### 사용 방법

1. `brew install openapi-generator` 로 openapi-generator를 설치합니다.

2. .env 파일에 OpenAPI JSON URL을 추가합니다.

3. openapi-xxx.json 설정 파일을 생성합니다. (이때 modelPackage에 지정한 경로에 타입 및 API 파일들이 생성됩니다.)

4. openapi.sh에서 설정 파일 경로와 .env의 JSON URL을 연결해줍니다.
