import React, { memo } from "react";
import { Typography } from "@material-ui/core";

import { SplitContainer } from "../components";
import EmailSentIllustration from "./EmailSentIllustration";

export default memo(() => {
  return (
    <SplitContainer>
      <div>
        <Typography variant="h4" align="center">
          Magic link sent!
        </Typography>
        <Typography align="center">
          Check your inbox and use the magic link to sign in.
        </Typography>
      </div>
      <EmailSentIllustration />
    </SplitContainer>
  );
});
