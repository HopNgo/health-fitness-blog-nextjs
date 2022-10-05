import { useAuth } from "@/hooks";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { Loading } from "./loading";

export interface IAuthProps {
  children: ReactNode;
}

export function Auth({ children }: IAuthProps) {
  const { profile, isValidating } = useAuth();
  const router = useRouter();

  if (isValidating) return <Loading />;

  if (!profile?.username && !isValidating) {
    router.push({
      pathname: "/login",
    });
  } else {
    return <div>{children}</div>;
  }
  return null;
}
