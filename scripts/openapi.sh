# Swagger 에서 생성한 openapi.json 파일을 기반으로 타입스크립트 파일을 생성합니다.

SAMPLE_PATH="./openapi-sample.json"

echo "\033[1;31m ~development~ \033[0m"

source .env.development

echo "\033[1;33m OPEN API - SAMPLE : Start \033[0m"
openapi-generator generate -i $SAMPLE_API_JSON_URL -g typescript-axios -c $SAMPLE_PATH --skip-validate-spec --global-property models
echo "\033[1;33m OPEN API - SAMPLE : End \033[0m"


