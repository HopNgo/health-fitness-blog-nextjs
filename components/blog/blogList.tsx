import { Post } from "@/models";
import { Box, Container } from "@mui/material";
import Link from "next/link";
import * as React from "react";
import BlogItem from "./blogItem";

export interface IBlogListProps {
  blogList: Post[];
}

export function BlogList({ blogList }: IBlogListProps) {
 
  return (
    <Box>
      <Container>
        {blogList.map((post) => (
          <Box key={post.id}>
            <Link href={`/blog/${post.slug}`}>
              <a>
                <BlogItem post={post} />
              </a>
            </Link>
          </Box>
        ))}
      </Container>
    </Box>
  );
}
