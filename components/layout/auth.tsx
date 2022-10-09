import { Box } from "@mui/material";
import { ReactNode } from "react";
import BG_AUTH from "@/public/images/bg-health-and-fitness.jpg";
export interface IAuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: IAuthLayoutProps) {
  return (
    <Box
      minHeight="100vh"
      sx={{
        backgroundImage: `url("/images/bg-health-and-fitness.jpg")`,
        backgroundSize: "cover",
      }}
    >
      {children}
    </Box>
  );
}
