import React from "react";
import { Box, Link, Typography } from "@material-ui/core";

import { Button, Routes } from "../components";

interface AuthErrorProps {
  error: string;
}

export default ({ error }: AuthErrorProps) => {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Oups
      </Typography>
      <Typography gutterBottom>{error}</Typography>
      <Typography gutterBottom>
        {"If the problem persist, please\u00A0"}
        <Link href="mailto:wcandillon@gmail.com">contact support</Link>
        {"."}
      </Typography>
      <Box marginTop={1}>
        <Button to={Routes.SIGN_IN} color="primary">
          Sign In
        </Button>
      </Box>
    </div>
  );
};
