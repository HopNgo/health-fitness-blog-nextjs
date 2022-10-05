import * as React from "react";
import { Box } from "@mui/material";

export function Loading() {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="rgba(0,0,0,0.2)"
    >
      <Box className="lds-spinner">
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Box>
    </Box>
  );
}
