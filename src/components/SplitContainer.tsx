import React, { Children, ReactNode } from "react";
import { Box, Container, makeStyles, useTheme } from "@material-ui/core";
import { ɸ } from "./Constants";

interface SplitContainerProps {
  children: ReactNode;
}

const spacing = { xs: 2, sm: 3, md: 4 };
const useStyles = makeStyles(() => ({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex"
  }
}));
export default ({ children }: SplitContainerProps) => {
  const [left, right] = Children.toArray(children);
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Box display="flex" flex={1} position="relative">
      <Box display="flex" flex={1} />
      <Box
        display={{ xs: "none", sm: "flex" }}
        flex={1}
        bgcolor={theme.palette.primary.main}
      />
      <Container className={classes.overlay}>
        <Box
          display="flex"
          flex={1}
          alignItems="center"
          justifyContent="center"
          paddingRight={spacing}
          overflow="scroll"
        >
          {left}
        </Box>
        <Box
          display={{ xs: "none", sm: "flex" }}
          flex={1}
          alignItems="center"
          justifyContent="center"
          paddingLeft={spacing}
          paddingTop={2}
          paddingBottom={2}
        >
          {right}
        </Box>
      </Container>
    </Box>
  );
};
