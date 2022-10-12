import { blogApi } from "@/apiClient";
import { BlogList } from "@/components/blog";
import { Seo } from "@/components/common";
import { Post, PostOmitForBlogListPage } from "@/models";
import { Box, Container, Pagination, Stack, Typography } from "@mui/material";
import { AxiosResponse } from "axios";
import { MainLayout } from "components/layout";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export interface BlogListPageProps {
  postList: PostOmitForBlogListPage[];
  totalPage: number;
}

export default function BlogListPage({
  postList,
  totalPage,
}: BlogListPageProps) {
  const router = useRouter();
  const [page, setPage] = useState<number | undefined>();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    if (!page) return;
    router.push(`/blog?page=${page}`);
  }, [page]);

  return (
    <Box pt="20px">
      <Seo
        data={{
          title: "Post List | Health And Fitness Education Blogs",
          description: "Some posts about take care of the healthy people ",
          url: `https://health-fitness-blog.vercel.app/blog?page=${page}`,
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
            page={page || 1}
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
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate"
  );

  const page: number = Number(context.query.page as string) || 1;

  const res: AxiosResponse = await blogApi.getPostListPerPage(page, 4);

  const postListProps: PostOmitForBlogListPage[] = res.data.postList;

  const totalPageProps: number = res.data.pagination.total;

  return {
    props: { postList: postListProps, totalPage: totalPageProps },
  };
};

BlogListPage.Layout = MainLayout;
