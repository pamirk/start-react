import React, { ReactNode, memo } from "react";
import { Box, useTheme } from "@material-ui/core";
import { BoxProps } from "@material-ui/core/Box";

interface BorderedBoxProps extends BoxProps {
  children: ReactNode;
  disabled?: boolean;
}

export default memo(({ children, disabled, ...props }: BorderedBoxProps) => {
  const theme = useTheme();
  return (
    <Box
      borderRadius={theme.shape.borderRadius}
      border={`${disabled ? 0 : 1}px solid`}
      borderColor={theme.palette.divider}
      {...props}
    >
      {children}
    </Box>
  );
});
