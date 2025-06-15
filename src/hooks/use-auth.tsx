// Package
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useRouter } from "@tanstack/react-router";
// Custom
import { SampleService } from "@/services/api/sample";
import { setCookie } from "@/common/cookie";
import { apiUrlConfig } from "@/common/env-config";
import { Util } from "@/lib/utils";

export const useAuth = () => {
  const router = useRouter();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationFn: (data: any) => SampleService.post(data),
  });

  const signIn = async (data: any) => {
    try {
      const loginedResponse: any = await loginMutation.mutateAsync(data);
      const loginedData = loginedResponse.data;

      const response = await axios.get(`${apiUrlConfig.sample}users/me`, {
        headers: {
          Authorization: `Bearer ${loginedData?.accessToken}`,
        },
      });
      const me: any = response.data.data;

      // 1. 쿠키 저장
      setCookie("accessToken", loginedData?.accessToken, { path: "/" });
      setCookie("refreshToken", loginedData?.refreshToken, { path: "/" });
      setCookie("expiresAt", loginedData?.expiresAt, { path: "/" });
      setCookie("me", me, { path: "/" });

      // 2. 페이지 이동
      navigate({ to: "/" });
    } catch (error: any) {
      const message = error?.response?.data?.message;
      alert(message);
    }
  };

  const signOut = async () => {
    await Util.cacheClear();

    // 전체 캐시 삭제
    queryClient.clear();
    router.invalidate();

    navigate({ to: "/" });
  };

  return {
    signIn,
    signOut,
    isPending: loginMutation.isPending,
  };
};
