import axios, { AxiosRequestConfig } from "axios";
import { apiUrlConfig as apiUrls } from "@/common/env-config";
import { Util } from "@/lib/utils";
import { getCookie, setCookie } from "@/common/cookie";
import { DefaultResponse } from "@/types";
import { SampleService } from "./api/sample";

type ApiUrlType = keyof typeof apiUrls;

const axiosInstance = axios.create({
  timeout: 300000,
});

/** 요청 인터셉터 */
const reqInt = (request: any) => {
  const accessToken = getCookie("accessToken");

  // request 의 header 에 authorization 헤더가 없고, accessToken 이 있으면 헤더에 추가
  if (!request.headers.Authorization && accessToken) {
    request.headers.Authorization = `Bearer ${accessToken}`;
  }

  return request;
};

axiosInstance.interceptors.request.use(reqInt);

const retryMap = new WeakMap();
// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const request = error.config as any;

    if (error.response?.status === 403) {
      if (!retryMap.get(request)) {
        if (Number(getCookie("expiresAt")) * 1000 > new Date().getTime()) {
          const res = await SampleService.post({
            refreshToken: getCookie("refreshToken"),
          });
          const loginedData: any = res.data;
          setCookie("accessToken", loginedData?.accessToken, { path: "/" });
          setCookie("refreshToken", loginedData?.refreshToken, { path: "/" });
          retryMap.set(request, true);

          request.headers.Authorization = `Bearer ${loginedData?.accessToken}`;
          return axiosInstance(request);
        }
      }
      await Util.cacheClear();
      window.location.href = "/sign-in";
    }
    return Promise.reject(error); // 401이 아닌 에러들 계속 전달
  },
);

// 헬퍼 함수: 서버별 baseURL 연결
const createService = (serverName: ApiUrlType) => {
  return {
    get: <T = unknown>(
      url: string,
      config: AxiosRequestConfig<any> | undefined = {},
    ) =>
      axiosInstance.get<DefaultResponse<T>>(url, {
        ...config,
        baseURL: apiUrls[serverName],
      }),
    post: <T = unknown>(
      url: string,
      data: any,
      config: AxiosRequestConfig<any> | undefined = {},
    ) =>
      axiosInstance.post<DefaultResponse<T>>(url, data, {
        ...config,
        baseURL: apiUrls[serverName],
      }),
    put: <T = unknown>(
      url: string,
      data: any,
      config: AxiosRequestConfig<any> | undefined = {},
    ) =>
      axiosInstance.put<DefaultResponse<T>>(url, data, {
        ...config,
        baseURL: apiUrls[serverName],
      }),
    delete: <T = unknown>(
      url: string,
      config: AxiosRequestConfig<any> | undefined = {},
    ) =>
      axiosInstance.delete<DefaultResponse<T>>(url, {
        ...config,
        baseURL: apiUrls[serverName],
      }),
  };
};

export const sampleClient = createService("sample");
