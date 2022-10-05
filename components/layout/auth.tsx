import { LayoutProps } from "@/models";
import { Auth } from "components/common";
import { useAuth } from "@/hooks";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { Box } from "@mui/material";
import BG_AUTH from "../../public/images/bg-health-and-fitness.jpg";
import Image from "next/image";

export interface IAuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: IAuthLayoutProps) {
  return (
    <Box
      minHeight="100vh"
      sx={{
        backgroundImage: `url(${BG_AUTH.blurDataURL})`,
        backgroundSize: "cover",
      }}
    >
      {children}
    </Box>
  );
}
