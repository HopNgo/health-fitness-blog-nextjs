import { Seo } from "@/components/common";
import { MainLayout } from "@/components/layout";
import { Post } from "@/models";
import { getBlogListFromMDBlog } from "@/utils";
import { Box, Container, Stack, Typography } from "@mui/material";
import { format } from "date-fns";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Image from "next/image";
import * as React from "react";

export interface IBlogDetailPageProps {
  post: Post;
}

export default function BlogDetailPage({ post }: IBlogDetailPageProps) {
  console.log(post);
  return (
    <Box pt="60px">
      <Seo
        data={{
          title: `${post.title} | Health And Fitness Education`,
          description: post.description,
          url: "",
          thumbnailUrl:
            post.author?.avatarUrl ||
            "https://res.cloudinary.com/dquveexgp/image/upload/v1664418633/learn-nextjs/healthy-lifestyle_mek8fy.webp",
        }}
      ></Seo>
      <Container>
        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          justifyContent="space-between"
          alignItems={{
            xs: "flex-start",
            md: "center",
          }}
          mb="50px"
          gap="20px"
        >
          <Box
            flexBasis={{
              md: "500px",
            }}
          >
            <Box mb="30px">
              <Typography
                component="h1"
                fontSize={{
                  xs: "25px",
                  md: "34px",
                }}
                fontWeight="bold"
              >
                {post.title}
              </Typography>
            </Box>
            <Stack mb="30px" direction="row" alignItems="flex-start" gap="20px">
              <Typography
                component="span"
                p="3px 5px"
                bgcolor="primary.main"
                borderRadius="16px"
                color="white"
                fontSize="17px"
                fontWeight="700"
              >
                {format(Number(post.publishedDate), "yyyy")}
              </Typography>
              <Typography
                component="span"
                letterSpacing="0.5px"
                fontWeight="700"
                fontSize={{
                  xs: "15px",
                  md: "16px",
                }}
              >
                {post.tagList.join(", ")}
              </Typography>
            </Stack>
            <Box>
              <Typography
                component="p"
                sx={{
                  textIndent: {
                    xs: "10px",
                    md: "50px",
                  },
                }}
                lineHeight="25px"
                letterSpacing="0.5px"
                fontSize={{
                  xs: "15px",
                  md: "16px",
                }}
              >
                {post.description}
              </Typography>
            </Box>
          </Box>
          <Stack
            direction={{
              xs: "row",
              md: "column",
            }}
            alignItems="center"
            gap="20px"
          >
            <Box
              width="80px"
              height="80px"
              overflow="hidden"
              borderRadius="50%"
            >
              <Image
                layout="fixed"
                width="80px"
                height="80px"
                src={post.author?.avatarUrl || ""}
                alt="Not Found"
              />
            </Box>
            <Typography
              component="span"
              fontSize="17px"
              fontWeight="700"
              textAlign="center"
            >
              Created by <br /> {post.author?.name || ""}
            </Typography>
          </Stack>
        </Stack>
        <div dangerouslySetInnerHTML={{ __html: post.htmlContent || "" }}></div>
      </Container>
    </Box>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postList = await getBlogListFromMDBlog();

  const paths: { params: { slug: string } }[] = postList.map((post: Post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const slug: string = context.params?.slug as string;

  // get All postList
  const postList = await getBlogListFromMDBlog();

  const postDetail = postList.find((post: Post) => post.slug === slug);

  if (!postDetail) return { notFound: true };

  return {
    props: { post: postDetail },
  };
};

BlogDetailPage.Layout = MainLayout;
