import { Box } from "@mui/material";
import * as React from "react";

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
      bgcolor="rgba(0,0,0,0.1)"
      zIndex={999999}
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
