import React from "react";
import ReactPlayer from "react-player";

import { Box, CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    margin: -2,
    width: 1024,
    [theme.breakpoints.down("md")]: {
      width: 640
    },
    [theme.breakpoints.down("sm")]: {
      width: 450
    },
    [theme.breakpoints.down(450)]: {
      width: 250
    },
    position: "relative",
    paddingTop: "56.25%",
    overflow: "hidden"
  },
  player: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
}));

interface YouTubePlayerProps {
  id: string;
  playing: boolean;
}

export default ({ id, playing }: YouTubePlayerProps) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box
        className={classes.player}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress size={80} />
      </Box>
      <ReactPlayer
        url={`https://wcandillon.wistia.com/medias/${id}`}
        width="100%"
        height="100%"
        className={classes.player}
        controls
        {...{ playing }}
      />
    </Box>
  );
};
