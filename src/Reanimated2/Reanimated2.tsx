import React, { useMemo, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Dialog, Typography } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";

import {Button, Lessons, Routes, Touchable, YouTubePlayer, ɸ} from "../components";
import Hero from "./Hero";

const Transition = React.forwardRef(function Transition(props, ref) {
  // @ts-ignore
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse"
    }
  },
  left: {
    flex: ɸ,
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      flex: 1,
      textAlign: "center"
    }
  },
  right: {
    flex: 1 - ɸ,
    padding: theme.spacing(2),
    position: "relative"
  },
  watchIntro: {
    marginLeft: theme.spacing(1),
    marginTop: 0,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: theme.spacing(1)
    }
  }
}));

export default () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const { openModal, closeModal } = useMemo(
    () => ({
      openModal: () => setOpen(true),
      closeModal: () => setOpen(false)
    }),
    []
  );
  return (
    <Container>
      <Box
        display="flex"
        alignItems="center"
        marginTop={8}
        marginBottom={8}
        className={classes.container}
      >
        <div className={classes.left}>
          <Typography variant="h3">Learn Reanimated 2</Typography>
          <Box marginTop={2} marginBottom={2}>
            <Typography>
              Build Delightful Gestures and Animations using Reanimated 2. This
              new version, currently in alpha, enables using JavaScript on the
              UI thread to compute animation frames. The goal being as always to
              build user experiences that run at 60 fps, even on low-end
              devices.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            width="fit-content"
            marginLeft={{ xs: "auto", md: 0 }}
            marginRight={{ xs: "auto", md: 0 }}
          >
            <Button color="primary" to={Routes.SIGN_IN}>
              {"Get Started for $9 a Month"}
            </Button>
            <Button onClick={openModal} className={classes.watchIntro}>
              Watch Intro
            </Button>
          </Box>
        </div>
        <Touchable className={classes.right} onClick={openModal} disableRipple>
          <Hero />
        </Touchable>
      </Box>
      <Dialog
        // @ts-ignore
        TransitionComponent={Transition}
        keepMounted
        onClose={closeModal}
        aria-labelledby="Learn React Native Declarative Gestures and Animations."
        maxWidth={false}
        {...{ open }}
      >
        <YouTubePlayer id="kq19l1avxq" playing={open} />
      </Dialog>
      <Lessons course="gestures-and-animations-2" />
    </Container>
  );
};
