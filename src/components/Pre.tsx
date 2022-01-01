import * as React from "react";
import { Box, Typography, useTheme } from "@material-ui/core";

interface PreProps {
  block?: boolean;
  children: string;
}

export default ({ block, children }: PreProps) => {
  const theme = useTheme();
  return (
    <Box
      padding={block ? 1 : 0.5}
      overflow="auto"
      display={block ? "block" : "inline"}
      bgcolor={block ? theme.palette.grey[100] : "transparent"}
      borderRadius={theme.shape.borderRadius}
    >
      <Typography
        variant="overline"
        style={{ lineHeight: block ? 2.66 : "inherit" }}
        noWrap
      >
        {children}
      </Typography>
    </Box>
  );
};
