/** 대소문자 @ . 허용 1~30 글자  */
const loginId = {
  pattern: /^[A-Za-z0-9@.]{4,30}$/,
  changePattern: /^[A-Za-z0-9@.]{1,30}$/,
};
/**
 * 영문 대소문자 (a-zA-Z) 하나 이상 포함
 * 숫자 (0-9) 하나 이상 포함
 * 특수기호 ! @ # $ % * _ 하나 이상 포함
 * 총 길이는 8자 이상 20자 이하
 */
const pw = {
  pattern: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%*_])[a-zA-Z\d!@#$%*_]{8,20}$/,
  changePattern: /^[A-Za-z0-9 -~]{1,20}$/,
};
/**
 * 이름 T,50 > _ 추가, 공백 X
 */
const name = {
  pattern: /^[가-힣a-zA-Z0-9_]{2,50}$/,
  changePattern: /^[ㄱ-ㅎ가-힣a-zA-Z0-9_]{1,50}$/,
};
const email = {
  pattern:
    /^[a-zA-Z0-9](?:[a-zA-Z0-9._-]*[a-zA-Z0-9])?@[a-zA-Z0-9-]{1,63}(?<!-)(?:\.[a-zA-Z0-9-]{1,63})*\.[a-zA-Z]{2,}(?<!\.)$/,
  changePattern: /^[a-zA-Z0-9 -~]{1,50}$/,
};

const mobileNumber = {
  pattern: /^(01[016789]\d{8})$/,
  changePattern: /^[0-9-]$/,
};
const seoulNumber = /^(02\d{7,8})$/;
const regionalNumber = /^(0[3-9][0-9]\d{7,8})$/;
const extensionNumber = /^(\d{7,8})$/;
/* 모든 번호 */
const phoneNumber = {
  pattern: /^(01[016789]\d{8}|02\d{7,8}|0[3-9][0-9]\d{7,8}|\d{7,8})$/,
  changePattern: /^[0-9-]$/,
};
//상세주소
const detailAddress = {
  pattern: /^[a-zA-z가-힣-]{1,50}$/,
  changePattern: /^[ㄱ-ㅎa-zA-z가-힣-]{1,50}$/,
};

// const phoneNumber = /^[0-9-]{1,13}$/;
// 영문(alpha), 한글, 숫자 조합 1~50자
const isAlphaKoNum50 = {
  pattern: /^[가-힣a-zA-Z0-9]{1,50}$/,
  changePattern: /^[ㄱ-ㅎ가-힣a-zA-Z0-9]{1,50}$/,
};

const isAlphaKoNum30 = /^[가-힣a-zA-Z0-9]{1,30}$/; // 영문(alpha), 한글, 숫자 조합 1~30자
const isAlphaKoNum20 = /^[가-힣a-zA-Z0-9]{1,20}$/; // 영문(alpha), 한글, 숫자 조합 1~20자
const isAlphaNum20 = /^[a-zA-Z0-9]{1,20}$/; // 영문(alpha), 숫자 조합 20자
const isNumeric20 = {
  pattern: /^[0-9]{1,20}$/,
  changePattern: /^[0-9]{1,20}$/,
}; // 숫자만 20자 이내로

export default {
  loginId,
  pw,
  name,
  email,
  detailAddress,
  mobileNumber,
  seoulNumber,
  regionalNumber,
  extensionNumber,
  phoneNumber,
  isAlphaKoNum50,
  isAlphaKoNum30,
  isAlphaKoNum20,
  isAlphaNum20,
  isNumeric20,
};
