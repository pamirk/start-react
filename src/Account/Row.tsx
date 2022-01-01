import React, { ReactNode } from "react";

import { Box, Typography } from "@material-ui/core";

interface RowProps {
  label: string;
  text: string;
  children: ReactNode;
}

export default ({ label, text, children }: RowProps) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        {label}
      </Typography>
      <Box display="flex" marginBottom={1} alignItems="center">
        <Box display="flex" flex={1} flexDirection="column" marginRight={1}>
          <Typography>{text}</Typography>
        </Box>
        <Box display="flex" flex={1}>
          {children}
        </Box>
      </Box>
    </>
  );
};
