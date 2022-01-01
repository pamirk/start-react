import React, { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@material-ui/core";

interface LinkProps {
  children: ReactNode;
  to: string;
}

export default ({ children, to }: LinkProps) => {
  return (
    <Link component={RouterLink} underline="none" {...{ to }}>
      {children}
    </Link>
  );
};
