import { Box } from "@mui/material";
import { ReactNode } from "react";

export interface IAuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: IAuthLayoutProps) {
  return (
    <Box
      minHeight="100vh"
      sx={{
        backgroundImage: `url("https://res.cloudinary.com/dquveexgp/image/upload/v1665021908/learn-nextjs/bg-health-and-fitness_zat4iv.jpg")`,
        backgroundSize: "cover",
      }}
    >
      {children}
    </Box>
  );
}
