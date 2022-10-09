import { WorkList } from "@/components/work";
import { Work } from "@/models";
import { Box, Container, Typography } from "@mui/material";
import * as React from "react";

export interface IFeatureWorksSectionProps {}

export function FeatureWorksSection(props: IFeatureWorksSectionProps) {
  const workList: Work[] = [
    {
      id: "1",
      title: "The Importance of Connecting Your Health with Others",
      tagList: ["Health, Happiness"],
      thumbnailUrl:
        "https://res.cloudinary.com/dquveexgp/image/upload/v1665286283/learn-nextjs/bigstock-Young-woman-with-kids-doing-fi-397381001-scaled_msjelr_qg7ouj.jpg",
      shortDescription:
        "CFW Health Fitness Specialist Connection and socialization are key components to mental health and happiness. You might wonder, how can socializing help you live a healthier lifestyle?",
      fullDescription:
        "Connection and socialization are key components to mental health and happiness. You might wonder, how can socializing help you live a healthier lifestyle? Well, making friends with people that are interested in their health can be pivotal in your ability to live a healthy lifestyle. When a person shares their goals with someone else, they are 65% more likely to achieve the goal. It is quite common that we do things with our friends or even mimic them. This is a natural part of friendship, and this is the key reason connecting with other people can help you live a healthy lifestyle. If you have a friend or friends that are healthy minded, you are more likely to live a healthy lifestyle. You might even be the healthy friend inspiring others.",
      createdAt: "1664196692055",
      updatedAt: "0",
    },
    {
      id: "2",
      title: "CFW Listed as Top Corporate Fitness Program Leading the Pack",
      tagList: ["Managing Fitness Programs"],
      thumbnailUrl:
        "https://res.cloudinary.com/dquveexgp/image/upload/v1665286224/learn-nextjs/City-Fitness-Center-1536x864_e3m4tq_kgbhi6.jpg",
      shortDescription:
        "At CFW, we are passionate about delivering our expertise through onsite and digital fitness to help individuals and organizations be at their very best. This passion is at the core of every CFW Program.",
      fullDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      createdAt: "1664196692055",
      updatedAt: "0",
    },
    {
      id: "3",
      title: "F is for Fitness and Fun",
      tagList: ["Hiking", "Exercise"],
      thumbnailUrl:
        "https://res.cloudinary.com/dquveexgp/image/upload/v1665286140/learn-nextjs/res-console.cloudinary_kd5gk5.jpg",
      shortDescription:
        "Health Fitness Specialist Are you someone who dreads working out? Cannot seem to find any fun ways to stay active?  Exercise does not always have to mean running on a treadmill or picking up weights.",
      fullDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      createdAt: "1664196692055",
      updatedAt: "0",
    },
    {
      id: "4",
      title: "Moving Well In All Aspects of Life",
      tagList: ["Ergonomics"],
      thumbnailUrl:
        "https://res.cloudinary.com/dquveexgp/image/upload/v1665286332/learn-nextjs/res-console.cloudinary_1_tnmx08.jpg",
      shortDescription:
        "Ergonomics can be defined as a science of determining how people and things can work efficiently and safely. If you’re ready to feel better, listed below are key items to move well at work, during daily activities, and while exercising.",
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
