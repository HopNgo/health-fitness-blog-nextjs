import { Loading } from "@/components/common";
import { AuthLayout } from "@/components/layout";
import { LoginForm } from "@/components/login";
import { useAuth } from "@/hooks";
import { Box, Stack } from "@mui/material";
export interface ILoginPageProps {}

export default function LoginPage(props: ILoginPageProps) {
  const { login, isValidating } = useAuth();

  return (
    <Box component="section">
      {isValidating && <Loading />}
      <Stack minHeight="100vh" justifyContent="center" alignItems="center">
        <LoginForm onLogin={login} />
      </Stack>
    </Box>
  );
}

LoginPage.Layout = AuthLayout;
