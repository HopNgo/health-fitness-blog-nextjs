import { blogApi } from "@/apiClient";
import { Seo } from "@/components/common";
import {
  FeatureWorksSection,
  HeroSection,
  RecentPostsSection,
} from "@/components/home";
import { Post } from "@/models";
import { Box } from "@mui/material";
import { MainLayout } from "components/layout";
import { GetStaticProps } from "next";

export interface HomePageProps {
  twoRecentPosts: Post[];
}

const HomePage = ({ twoRecentPosts }: HomePageProps) => {
  return (
    <Box>
      <Seo
        data={{
          title: "Home | Health And Fitness Education Blogs",
          description:
            "The website shows some blogs about how to take care of the human health",
          url: "",
          thumbnailUrl:
            "https://res.cloudinary.com/dquveexgp/image/upload/v1664418633/learn-nextjs/healthy-lifestyle_mek8fy.webp",
        }}
      />
      <HeroSection />
      <RecentPostsSection twoRecentPosts={twoRecentPosts} />
      <FeatureWorksSection />
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await blogApi.getTwoRecentPosts();
  const homePageProps = {
    twoRecentPosts: data.postList,
  };
  return {
    props: homePageProps,
  };
};

HomePage.Layout = MainLayout;

export default HomePage;
