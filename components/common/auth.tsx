import { useAuth } from "@/hooks";
import { Profile } from "@/models";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { Loading } from "./loading";

export interface IAuthProps {
  children: ReactNode;
}

export function Auth({ children }: IAuthProps) {
  const { profile, isValidating } = useAuth();

  const router = useRouter();

  if (isValidating) return <Loading />;

  if (!profile && !isValidating) {
    router.push({
      pathname: "/login",
    });
  } else {
    return <div>{children}</div>;
  }
  return null;
}
