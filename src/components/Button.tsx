import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  CircularProgress,
  Button as MuiButton,
  makeStyles,
  useTheme
} from "@material-ui/core";
import { ButtonProps as MuiButtonProps } from "@material-ui/core/Button";

const size = 24;

interface ButtonProps {
  children: ReactNode;
  color?: "primary" | "default";
  to?: string;
  onClick?: MuiButtonProps["onClick"];
  loading?: boolean;
  type?: MuiButtonProps["type"];
  disabled?: boolean;
  href?: string;
  className?: string;
  fullWidth?: boolean;
  autoFocus?: boolean;
  target?: string;
}

const useStyles = makeStyles(theme => ({
  root: ({ color }: { color?: "primary" | "secondary" | "default" }) => ({
    boxShadow: "none",
    "&:hover": {
      backgroundColor:
        color === "default" || !color
          ? theme.palette.grey[100]
          : theme.palette.primary.main
    }
  })
}));

export default React.memo(
  ({
    children,
    to,
    color = "default",
    onClick,
    loading,
    type,
    disabled,
    href,
    className,
    fullWidth,
    autoFocus,
    target
  }: ButtonProps) => {
    const classes = useStyles({ color });
    const theme = useTheme();
    const variant = color === "default" ? "outlined" : "contained";
    const component = to ? Link : undefined;
    const defaultProgressColor =
      theme.palette.type === "light" ? "black" : "white";
    const progressColor =
      theme.palette.common[
        color === "default" ? defaultProgressColor : "white"
      ];
    return (
      <MuiButton
        disabled={loading || disabled}
        classes={{ root: classes.root }}
        {...{
          to,
          href,
          variant,
          onClick,
          component,
          color,
          type,
          className,
          fullWidth,
          autoFocus,
          target
        }}
      >
        <Box position="relative">
          <Box visibility={loading ? "hidden" : "visible"}>{children}</Box>
          {loading && (
            <Box
              position="absolute"
              top="0"
              left={`calc(50% - ${size / 2}px)`}
              color={progressColor}
            >
              <CircularProgress color="inherit" {...{ size }} />
            </Box>
          )}
        </Box>
      </MuiButton>
    );
  }
);
