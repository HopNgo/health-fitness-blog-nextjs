import LOGO from "@/public/images/logo.svg";
import { Box, Container, Link as MuiLink, Stack } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { ROUTE_LIST } from "./routes";

export default function HeaderDesktop() {
  const router = useRouter();

  return (
    <Box
      component={"header"}
      display={{ xs: "none", md: "block" }}
      boxShadow="0px 2px 2px rgba(0,0,0,0.1)"
      position="sticky"
      bgcolor="white"
      zIndex={20}
      top="0"
    >
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Image
              layout="fixed"
              width="50px"
              height="50px"
              objectFit="cover"
              src={LOGO}
              alt="Logo"
              priority={true}
            />
          </Box>
          <Stack direction={"row"} spacing={3} py="25px">
            {ROUTE_LIST.map((route) => (
              <Link key={route.path} href={route.path} passHref>
                <MuiLink
                  className={clsx({
                    active: router.pathname === route.path,
                  })}
                  fontSize={"20px"}
                  fontWeight={500}
                  lineHeight="29px"
                >
                  {route.label}
                </MuiLink>
              </Link>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
