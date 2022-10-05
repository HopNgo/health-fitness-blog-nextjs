import { authApi } from "@/apis";
import { LoginPayload } from "@/models";
import useSWR from "swr";
import { PublicConfiguration } from "swr/dist/types";

export const useAuth = (options?: Partial<PublicConfiguration>) => {
  const { data, isValidating, error, mutate } = useSWR(`/profile`, {
    dedupingInterval: 60 * 60 * 1000,
    revalidateOnFocus: false,
    ...options,
  });

  const login = async (data: LoginPayload) => {
    await authApi.login(data);
    await mutate();
  };

  const logout = async () => {
    await authApi.logout();
    await mutate({}, false);
  };
  const response: any = data;
  console.log(data);
  const profile = response?.data;
  return {
    profile,
    isValidating,
    error,
    login,
    logout,
  };
};
