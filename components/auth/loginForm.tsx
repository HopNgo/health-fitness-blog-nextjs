import { InputField } from "@/components/common/form";
import { LoginPayload } from "@/models";
import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface LoginFormProps {
  onLogin: Function;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const router = useRouter();

  const schema = yup.object().shape({
    username: yup.string().required().min(6),
    password: yup.string().required().min(8),
  });

  const { control, handleSubmit } = useForm<LoginPayload>({
    mode: "onTouched",
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginPayload) => {
    try {
      await onLogin(data);
      router.push("/admin/blogs");
    } catch (error) {
      console.log(error);
    }
  };
  //
  return (
    <Box
      minWidth="500px"
      maxWidth="500px"
      bgcolor="#f9f9f9"
      borderRadius="16px"
    >
      <Stack alignItems=" center" px="50px" py="50px">
        <Typography component="h1" variant="h4" fontWeight="bold" mb="20px">
          Login
        </Typography>
        <Typography
          component="p"
          sx={{ wordWrap: "break-word", fontSize: "15px" }}
          mb="10px"
        >
          If you want to login, please enter anything in username and password
          field with the following condition:
        </Typography>
        <Typography
          component="span"
          lineHeight="25px"
          fontStyle="italic"
          color="#FFCC00"
        >
          * Username must be at least 6 characters
        </Typography>
        <Typography
          component="span"
          lineHeight="25px"
          fontStyle="italic"
          color="#FFCC00"
          mb="30px"
        >
          * Password must be at least 8 characters
        </Typography>
        <Box component="form">
          <InputField
            name="username"
            label="username"
            type="text"
            control={control}
          />
          <InputField
            name="password"
            label="password"
            type="password"
            control={control}
          />
          <Button
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            sx={{
              width: "100%",
              bgcolor: "#00A8CC",
              "&:hover": {
                bgcolor: "#00A8CC",
                opacity: "0.8",
              },
            }}
          >
            LOGIN
          </Button>
        </Box>
        <Box mt="50px">
          <Typography
            component="span"
            fontStyle="italic"
            color="#00A8CC"
            mr="10px"
          >
            If you want to go to home page?
          </Typography>
          <Link href="/">
            <a>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#00A8CC",
                  "&:hover": {
                    bgcolor: "#00A8CC",
                    opacity: "0.8",
                  },
                }}
              >
                CLICK ME
              </Button>
            </a>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
}
