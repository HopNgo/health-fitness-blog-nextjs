import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import avatar from "public/images/healthy-lifestyle.jpg";
import * as React from "react";

export function HeroSection() {
  return (
    <Box
      component="section"
      pt={{ xs: "33px", md: "100px" }}
      pb={{ xs: "58px", md: "50px" }}
    >
      <Container>
        <Stack
          direction={{
            xs: "column-reverse",
            md: "row",
          }}
          alignItems={{
            xs: "center",
            md: "flex-start",
          }}
          gap={{
            xs: "45px 0",
            md: "0 106px",
          }}
        >
          <Stack
            direction={"column"}
            gap="40px 0"
            flexBasis={{
              xs: "0",
              md: "500px",
            }}
            justifyContent="center"
            alignItems={{
              xs: "center",
              md: "flex-start",
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              fontWeight={700}
              lineHeight="60px"
              fontSize="44px"
              textAlign={{
                xs: "center",
                md: "left",
              }}
            >
              Health and Fitness <br />
              Education
            </Typography>
            <Box>
              <Typography component="p" lineHeight="24px">
                If you are an avid fitness enthusiast leading a healthy life,
                you may feel the urge to inspire others to live healthier.
              </Typography>
              <Typography
                component="p"
                lineHeight="24px"
                mt="10px"
                fontSize="17px"
              >
                To understand a little bit more about what running a health and
                fitness blog entails, have a look at some examples of health and
                fitness blogs below.
              </Typography>
            </Box>

            <Link href="/blog">
              <a>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "2px",
                    lineHeight: "29px",
                    fontWeight: "500",
                  }}
                >
                  Read More
                </Button>
              </a>
            </Link>
          </Stack>
          <Box borderRadius="50%" overflow="hidden">
            <Image
              src={avatar}
              width="300px"
              height="280px"
              layout="fixed"
              objectFit="cover"
              alt="Avatar"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
