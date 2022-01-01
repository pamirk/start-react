import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ButtonBase, makeStyles } from "@material-ui/core";

interface TouchableProps {
  to?: string;
  onClick?: () => void;
  children: ReactNode;
  disableRipple?: boolean;
  className?: string;
}

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flex: 1
  }
}));

export default ({
  to,
  disableRipple,
  children,
  className,
  onClick
}: TouchableProps) => {
  const classes = useStyles();
  const component = to ? Link : undefined;
  return (
    <ButtonBase
      className={[classes.container, className].filter(c => c).join(" ")}
      {...{ to, disableRipple, onClick, component }}
    >
      {children}
    </ButtonBase>
  );
};
