import React, { useContext } from "react";
import ReactPlayer from "react-player";

import { Box, CircularProgress, makeStyles, useTheme } from "@material-ui/core";
import { AuthContext } from "./AuthContext";

const useStyles = makeStyles(theme => ({
  container: {
    position: "relative",
    paddingTop: "56.25%",
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius,
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

interface VideoPlayerProps {
  url: string;
}

export default ({ url }: VideoPlayerProps) => {
  const [user] = useContext(AuthContext);
  const options = user ? { email: user.email } : {};
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Box className={classes.container}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        className={classes.player}
        bgcolor={theme.palette.grey[100]}
      >
        <CircularProgress size={80} />
      </Box>
      <ReactPlayer
        url={`https://wcandillon.wistia.com/medias/${url}`}
        width="100%"
        height="100%"
        className={classes.player}
        config={{ wistia: { options } }}
        controls
      />
    </Box>
  );
};
