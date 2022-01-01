import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import Button from "./Button";

const useStyles = makeStyles(theme => ({
  skeleton: {
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.shape.borderRadius,
    animation: "$animate 1.5s ease-in-out infinite"
  },
  "@keyframes animate": {
    "0%": {
      opacity: 1
    },
    "50%": {
      opacity: 0.4
    },
    "100%": {
      opacity: 1
    }
  }
}));

interface SkeletonProps {
  fullWidth?: boolean;
  width: number;
}

export default ({ width, fullWidth }: SkeletonProps) => {
  const classes = useStyles();
  return (
    <Button {...{ fullWidth }}>
      <Typography variant="button" className={classes.skeleton}>
        {new Array(width).fill(0).map(() => "\u00A0")}
      </Typography>
    </Button>
  );
};
