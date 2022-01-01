import React from "react";
import { Box, CircularProgress } from "@material-ui/core";

export default () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex={1}
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress size={100} color="primary" />
    </Box>
  );
};
