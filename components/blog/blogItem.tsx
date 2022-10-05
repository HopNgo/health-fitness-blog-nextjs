import { Post } from "@/models";
import { Box, Divider, Stack, Typography } from "@mui/material";
import * as React from "react";
import { format } from "date-fns";
export interface IBlogItemProps {
  post: Post;
}

export default function BlogItem({ post }: IBlogItemProps) {
  return (
    <Box>
      <Stack>
        <Typography
          component="h3"
          variant="h5"
          fontWeight="700"
          lineHeight="44px"
          fontSize="28px"
        >
          {post.title}
        </Typography>
        <Stack
          flexDirection={"row"}
          justifyContent="flex-start"
          gap="26px"
          my="17px"
        >
          <Typography component="span" fontSize="17px">
            {format(Number(post.publishedDate), "dd MMM yyyy")}
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography component="span" fontSize="17px">
            {post.tagList.join(", ")}
          </Typography>
        </Stack>
        <Typography component="p">{post.description}</Typography>
      </Stack>
      <Divider sx={{ my: "30px" }} />
    </Box>
  );
}
