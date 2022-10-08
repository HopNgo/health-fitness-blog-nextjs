import { Post } from "@/models";
import {
  Box,
  Container,
  Link as MuiLink,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import * as React from "react";
import PostCard from "./postCard";

export interface IRecentPostsSectionProps {
  twoRecentPosts: Post[];
}

export function RecentPostsSection({
  twoRecentPosts,
}: IRecentPostsSectionProps) {
  return (
    <Box component="section" bgcolor="secondary.light" pt="7px" pb="32px">
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Typography fontSize="22px" component="span" lineHeight="64px">
            Recent Posts
          </Typography>
          <Link href="/blog" passHref>
            <MuiLink color="text.secondary">View All</MuiLink>
          </Link>
        </Stack>
        <Stack
          flexDirection={{
            sm: "column",
            md: "row",
          }}
          gap="20px"
          justifyContent={"center"}
        >
          {twoRecentPosts.map((post) => (
            <Box
              key={post.id}
              width={{
                sm: "100%",
                md: "50%",
              }}
            >
              <Link href={`/blog/${post.slug}`}>
                <a>
                  <PostCard post={post} />
                </a>
              </Link>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
