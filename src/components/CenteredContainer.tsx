import React, { ReactNode, memo } from "react";
import { Box, Container } from "@material-ui/core";
import { ContainerProps } from "@material-ui/core/Container";

import BorderedBox from "./BorderedBox";

interface CenteredContainerProps {
  children: ReactNode;
  maxWidth?: ContainerProps["maxWidth"];
  noBorder?: boolean;
}

export default memo(
  ({ children, maxWidth, noBorder }: CenteredContainerProps) => (
    <Box display="flex" justifyContent="center" flexDirection="column" flex={1}>
      <Container {...{ maxWidth }}>
        <BorderedBox disabled={noBorder} padding={2}>
          {children}
        </BorderedBox>
      </Container>
    </Box>
  )
);
