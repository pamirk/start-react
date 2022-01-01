import React from "react";
import { Box, Typography, makeStyles, useTheme } from "@material-ui/core";
import ArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import ArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { Touchable } from "../components";

const transition = (properties: string[], duration: number) =>
  properties.map(property => `${property} ${duration}ms`).join(", ");

const useStyles = makeStyles(theme => ({
  container: ({ direction }: NavigatorPaneProps) => ({
    borderBottomLeftRadius: direction === "left" ? theme.shape.borderRadius : 0,
    borderBottomRightRadius:
      direction === "right" ? theme.shape.borderRadius : 0,
    transition: transition(
      ["background-color"],
      theme.transitions.duration.standard
    ),
    transitionTimingFunction: theme.transitions.easing.easeInOut,
    "& .arrow": {
      transition: transition(
        ["transform", "color"],
        theme.transitions.duration.standard
      ),
      transitionTimingFunction: theme.transitions.easing.easeInOut
    },
    "&:hover": {
      backgroundColor: theme.palette.grey[100],
      "& .arrow": {
        color: theme.palette.primary.main,
        transform: `translateX(${direction === "left" ? -10 : 10}px)`
      }
    }
  })
}));

interface NavigatorPaneProps {
  direction: "left" | "right";
  label: string;
  to: string;
}

export default (props: NavigatorPaneProps) => {
  const theme = useTheme();
  const classes = useStyles(props);
  const { direction, label, to } = props;
  return (
    <Touchable {...{ to }}>
      <Box
        display="flex"
        overflow="hidden"
        flexDirection={direction === "left" ? "row" : "row-reverse"}
        flex={1}
        alignItems="center"
        padding={{ xs: 1, md: 2 }}
        borderRight={
          direction === "left" ? `1px solid ${theme.palette.divider}` : "0"
        }
        className={classes.container}
      >
        <Box
          fontSize={{ xs: 48, md: 72 }}
          color={theme.palette.divider}
          className="arrow"
          display="flex"
          alignItems="center"
        >
          {direction === "left" && (
            <ArrowLeftIcon fontSize="inherit" color="inherit" />
          )}
          {direction === "right" && (
            <ArrowRightIcon fontSize="inherit" color="inherit" />
          )}
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems={direction === "left" ? "flex-start" : "flex-end"}
        >
          <Typography variant="caption">
            {direction === "left" ? "Back to" : "Watch next"}
          </Typography>
          <Typography variant="subtitle1">{label}</Typography>
        </Box>
      </Box>
    </Touchable>
  );
};
