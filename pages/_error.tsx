import { MainLayout } from "@/components/layout";
import { Box, Button, Stack, Typography } from "@mui/material";
import Router from "next/router";

export interface FourOhFourProps {}

export default function FourOhFour(props: FourOhFourProps) {
  return (
    <Box
      position="fixed"
      top="50%"
      left="50%"
      sx={{ transform: "translate(-50%,-50%)" }}
    >
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Typography
          component="span"
          fontWeight="700"
          letterSpacing="1px"
          fontSize={{
            xs: "16px",
            md: "40px",
          }}
        >
          OOPS!
        </Typography>
        <Typography
          component="span"
          fontWeight="700"
          lineHeight="100px"
          color="primary.main"
          fontSize={{
            xs: "16px",
            md: "100px",
          }}
        >
          404
        </Typography>
        <Typography
          component="span"
          fontWeight="700"
          letterSpacing="1px"
          mt="20px"
          fontSize={{
            xs: "16px",
            md: "20px",
          }}
        >
          PAGE IS NOT FOUND
        </Typography>

        <Button
          sx={{ mt: "100px" }}
          variant="contained"
          onClick={() => Router.back()}
        >
          Back To Page
        </Button>
      </Stack>
    </Box>
  );
}

FourOhFour.Layout = MainLayout;
