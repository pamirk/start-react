import React from "react";
import { Box, Typography } from "@material-ui/core";

import Coded from "@material-ui/icons/Code";
import Love from "@material-ui/icons/Favorite";

export default () => {
  return (
    <Box
      bgcolor="grey.100"
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding={4}
      marginTop="auto"
    >
      <Box display="flex" margin={1}>
        <Coded />
      </Box>
      <Typography>with</Typography>
      <Box display="flex" margin={1}>
        <Love />
      </Box>
      <Typography>by PK</Typography>
    </Box>
  );
};
