import { Post } from "@/models";
import {
  Card,
  CardContent,
  Divider, Stack,
  Typography
} from "@mui/material";
import { format } from "date-fns";
import * as React from "react";

export interface IPostCardProps {
  post: Post;
}

export default function PostCard({ post }: IPostCardProps) {
  if (!post) return null;

  return (
    <Card sx={{ p: "23px" }}>
      <CardContent>
        <Typography
          component="h3"
          variant="h5"
          fontWeight="700"
          lineHeight="38px"
        >
          {post.title}
        </Typography>
        <Stack
          flexDirection={"row"}
          justifyContent="flex-start"
          gap="26px"
          my="17px"
        >
          <Typography component="span">
            {format(Number(post.publishedDate), "dd MMM yyyy")}
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography component="span">{post.tagList.join(", ")}</Typography>
        </Stack>
        <Typography component="p" className="textHidden">
          {post.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
