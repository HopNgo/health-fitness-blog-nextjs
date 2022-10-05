import { Box, Container, Typography } from "@mui/material";
import * as React from "react";
import { WorkList } from "@/components/work";
import { Work } from "@/models";

export interface IFeatureWorksSectionProps {}

export function FeatureWorksSection(props: IFeatureWorksSectionProps) {
  const workList: Work[] = [
    {
      id: "1",
      title: "Designing Dashboards with usability in mind",
      tagList: ["Dashboard", "User Experience Design"],
      thumbnailUrl:
        "https://res.cloudinary.com/dquveexgp/image/upload/v1664244309/learn-nextjs/Rectangle_30_1_xtnsx2.jpg",
      shortDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      createdAt: "1664196692055",
      updatedAt: "0",
    },
    {
      id: "2",
      title: "Vibrant Portraits of 2020",
      tagList: ["Illustration"],
      thumbnailUrl:
        "https://res.cloudinary.com/dquveexgp/image/upload/v1664244309/learn-nextjs/Rectangle_32_1_zxddu7.jpg",
      shortDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      createdAt: "1664196692055",
      updatedAt: "0",
    },
    {
      id: "3",
      title: "36 Days of Malayalam type",
      tagList: ["Typography"],
      thumbnailUrl:
        "https://res.cloudinary.com/dquveexgp/image/upload/v1664244309/learn-nextjs/Rectangle_34_1_kmffmu.jpg",
      shortDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      createdAt: "1664196692055",
      updatedAt: "0",
    },
    {
      id: "4",
      title: "Components",
      tagList: ["Components", "Design"],
      thumbnailUrl:
        "https://res.cloudinary.com/dquveexgp/image/upload/v1664245836/learn-nextjs/Rectangle_40_1_j90c9w.jpg",
      shortDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      createdAt: "1664196692055",
      updatedAt: "0",
    },
  ];
  return (
    <Box component="section" pt="15px">
      <Container>
        <Box>
          <Typography fontSize="22px" component="span" lineHeight="60px">
            Feature Works
          </Typography>
        </Box>
        <Box>
          <WorkList workList={workList} />
        </Box>
      </Container>
    </Box>
  );
}
