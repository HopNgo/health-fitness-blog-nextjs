import { Work } from "@/models";
import { Box } from "@mui/material";
import * as React from "react";
import WorkItem from "./workItem";

export interface IWorkListProps {
  workList: Work[];
}

export function WorkList({ workList }: IWorkListProps) {
  if (workList.length === 0) return null;
  return (
    <Box>
      {workList.slice(0, 3).map((work) => (
        <WorkItem key={work.id} work={work} />
      ))}
    </Box>
  );
}
