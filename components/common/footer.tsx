import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Box, Container, Stack, Typography
} from "@mui/material";

export interface IFooterProps {}

export function Footer(props: IFooterProps) {
  return (
    <Box component={"footer"} textAlign="center" p="50px">
      <Container>
        <Box mb="26px">
          <Stack direction="row" justifyContent="center" gap="40px">
            <FacebookIcon
              sx={{
                width: "30px",
                height: "30px",
              }}
            />
            <InstagramIcon
              sx={{
                width: "30px",
                height: "30px",
              }}
            />
            <TwitterIcon
              sx={{
                width: "30px",
                height: "30px",
              }}
            />
            <LinkedInIcon
              sx={{
                width: "30px",
                height: "30px",
              }}
            />
          </Stack>
        </Box>
        <Box>
          <Typography>Copyright ©2020 All rights reserved </Typography>
        </Box>
      </Container>
    </Box>
  );
}
