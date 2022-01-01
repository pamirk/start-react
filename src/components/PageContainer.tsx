import React, { ReactNode } from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import { ContainerProps } from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  },
  content: {
    borderWidth: 1,
    borderColor: theme.palette.divider,
    borderStyle: "solid",
    borderRadius: theme.shape.borderRadius,
    flex: 1,
    display: "flex",
    flexDirection: "column"
  }
}));

interface PageContainerProps {
  children: ReactNode;
  maxWidth?: ContainerProps["maxWidth"];
}

export default ({ children, maxWidth }: PageContainerProps) => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      flex={1}
      marginTop={2}
      marginBottom={2}
    >
      <Container classes={{ root: classes.container }} {...{ maxWidth }}>
        <div className={classes.content}>{children}</div>
      </Container>
    </Box>
  );
};
