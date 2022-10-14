import { Loading, Seo } from "@/components/common";
import { AuthLayout } from "@/components/layout";
import { LoginForm } from "@/components/auth";
import { useAuth } from "@/hooks";
import { Box, Stack } from "@mui/material";
export interface ILoginPageProps {}

export default function LoginPage(props: ILoginPageProps) {
  const { login, isValidating } = useAuth({ revalidateOnMount: false });

  return (
    <Box component="section">
      <Seo
        data={{
          title: "Login Form | Health And Fitness Education Blogs",
          description: "",
          url: "",
          thumbnailUrl:
            "https://res.cloudinary.com/dquveexgp/image/upload/v1664418633/learn-nextjs/healthy-lifestyle_mek8fy.webp",
        }}
      />
      {isValidating && <Loading />}
      <Stack minHeight="100vh" justifyContent="center" alignItems="center">
        <LoginForm onLogin={login} />
      </Stack>
    </Box>
  );
}

LoginPage.Layout = AuthLayout;
