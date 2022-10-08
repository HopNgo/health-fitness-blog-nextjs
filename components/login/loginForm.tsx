import { LoginPayload } from "@/models";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

interface LoginFormProps {
  onLogin: Function;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<LoginPayload>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginPayload) => {
   
    try {
      await onLogin(data);
      router.push("/admin/blogs");
    } catch (error) {}
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
          * Username must be more than 6 characters
        </Typography>
        <Typography
          component="span"
          lineHeight="25px"
          fontStyle="italic"
          color="#FFCC00"
          mb="30px"
        >
          * Password must be more than 8 characters
        </Typography>
        <Box component="form">
          <TextField
            {...register("username", { required: true, minLength: 6 })}
            id="username"
            label="Username"
            variant="outlined"
            onChange={() => clearErrors("username")}
            error={Boolean(errors.username?.type)}
            helperText={
              (errors.username?.type === "required" &&
                "* Username is required") ||
              (errors.username?.type === "minLength" &&
                "* Username must be more than 6 characters")
            }
            sx={{ width: "100%", mb: "20px" }}
          />
          <TextField
            {...register("password", { required: true, minLength: 8 })}
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            onChange={() => clearErrors("password")}
            error={Boolean(errors.password?.type)}
            helperText={
              (errors.password?.type === "required" &&
                "* Password is required") ||
              (errors.password?.type === "minLength" &&
                "* Password must be more than 8 characters")
            }
            sx={{ width: "100%", mb: "30px" }}
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
