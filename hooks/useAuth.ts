import { authApi } from "@/apis";
import { LoginPayload, Profile } from "@/models";
import useSWR, { SWRResponse } from "swr";
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
    await mutate(null, false);
  };
  const profile: Profile = data as Profile;
  return {
    profile,
    isValidating,
    error,
    login,
    logout,
  };
};
