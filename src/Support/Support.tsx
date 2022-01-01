import React, { memo } from "react";
import { Link, Typography } from "@material-ui/core";

import { SplitContainer } from "../components";
import SupportIllustration from "./SupportIllustration";

export default memo(() => {
  return (
    <SplitContainer>
      <div>
        <Typography variant="h4" align="center">
          Support
        </Typography>
        <Typography align="center">
          {"Please contact us "}
          <Link href="mailto:wcandillon@gmail.com">by email</Link>
          {"."}
          <br />
          {`We are
          looking looking forward to answer any of your questions.`}
        </Typography>
      </div>
      <SupportIllustration />
    </SplitContainer>
  );
});
