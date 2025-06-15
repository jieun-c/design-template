NAME="AWS 배포입니다."
ENV="상용"
BUILD_PATH="./dist"
source .env.production

echo "\033[1;31m$NAME [$ENV]\033[0m"

echo "\033[1;33m Build Start \033[0m"
npm run build:prod
echo "\033[1;33m Build End \033[0m\n"

echo "\033[1;33m Publish Start \033[0m"
aws s3 sync $BUILD_PATH $AWS_S3_URL
echo "\033[1;33m Publish End \033[0m\n"

echo "\033[1;33m Invalidation Start \033[0m"
DISTRIBUTION_ID=$AWS_CLOUD_FRONT_ID
INVALIDATION_ID=$(aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths '/*' | jq -r '.Invalidation.Id' )
echo "\033[1;33m Processing.. \033[0m"
aws cloudfront wait invalidation-completed --distribution-id $DISTRIBUTION_ID --id $INVALIDATION_ID
echo "\033[1;33m Invalidation End \033[0m\n"