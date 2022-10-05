import { blogApi } from "@/apiClient";
import { BlogList } from "@/components/blog";
import { Seo } from "@/components/common";
import { Post } from "@/models";
import { Box, Container, Pagination, Stack, Typography } from "@mui/material";
import { MainLayout } from "components/layout";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Router from "next/router";
import { useEffect, useState } from "react";
export interface BlogListPageProps {
  postList: Post[];
  totalPage: number;
}

export default function BlogListPage({
  postList,
  totalPage,
}: BlogListPageProps) {
  const [page, setPage] = useState<number>(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    Router.push(`/blog/?page=${page}`);
    console.log("render useeffect");
  }, [page]);

  return (
    <Box pt="20px">
      <Seo
        data={{
          title: "Post List | Health And Fitness Education Blogs",
          description: "Some posts about take care of the healthy people ",
          url: "",
          thumbnailUrl:
            "https://res.cloudinary.com/dquveexgp/image/upload/v1664418633/learn-nextjs/healthy-lifestyle_mek8fy.webp",
        }}
      />
      <Container>
        <Box>
          <Typography component="h1" fontSize="42px" fontWeight="700">
            Blog
          </Typography>
        </Box>
        <Box pt="30px">
          <BlogList blogList={postList} />
        </Box>
        <Stack justifyContent="center" alignItems="center">
          <Pagination
            variant="outlined"
            shape="rounded"
            count={totalPage}
            page={page}
            onChange={handleChange}
          />
        </Stack>
      </Container>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const page = Number(context.query.page as string) || 1;

  const { data } = await blogApi.getPostListPerPage(page, 4);

  const postListPageProps = {
    postList: data.postList,
    totalPage: data.pagination.total,
  };

  return {
    props: postListPageProps,
  };
};

BlogListPage.Layout = MainLayout;
