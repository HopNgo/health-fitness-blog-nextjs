import { Work } from "@/models";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";
import * as React from "react";
export interface IWorkItemProps {
  work: Work;
}

export default function WorkItem({ work }: IWorkItemProps) {
  return (
    <Box>
      <Stack
        direction={{
          sm: "column",
          md: "row",
        }}
        gap="17px"
        alignItems="center"
      >
        <Box
          width={{ xs: "100%", md: "246px" }}
          borderRadius="16px"
          overflow="hidden"
          flexShrink={0}
        >
          <Image
            src={work.thumbnailUrl}
            layout="responsive"
            width="246px"
            height="200px"
            objectFit="cover"
            alt="not found"
            blurDataURL={`data:${work.thumbnailUrl}`}
            placeholder="blur"
          />
        </Box>
        <Stack maxWidth="590px" gap="17px" py="20px">
          <Typography
            component="h3"
            fontSize="26px"
            fontWeight="700"
            lineHeight="44px"
          >
            {work.title}
          </Typography>
          <Box>
            <Typography
              component="span"
              fontSize="18px"
              fontWeight="700"
              color="white"
              bgcolor="secondary.dark"
              borderRadius="16px"
              p="2px 8px"
              mr="26px"
            >
              {format(Number(work.createdAt), "yyyy")}
            </Typography>
            <Typography
              component="span"
              color="#8695A4"
              fontSize="18px"
              fontWeight="400"
              lineHeight="29px"
            >
              {work.tagList.join(", ")}
            </Typography>
          </Box>
          <Typography component="p">{work.shortDescription}</Typography>
        </Stack>
      </Stack>
      <Divider />
    </Box>
  );
}
