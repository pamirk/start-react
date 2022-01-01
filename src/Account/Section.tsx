import React, { ReactNode } from "react";
import { Box, Divider } from "@material-ui/core";

export default ({
  children,
  bottom
}: {
  children: ReactNode;
  bottom?: boolean;
}) => (
  <>
    <Box marginX={2} marginY={4}>
      {children}
    </Box>
    {!bottom && <Divider />}
  </>
);
