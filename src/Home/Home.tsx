import React, { useMemo, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Dialog, Typography } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";

import {
  BorderedBox,
  Button,
  Lessons,
  Link,
  Routes,
  Touchable,
  YouTubePlayer,
  ɸ
} from "../components";
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
          <Typography variant="h3">Build Delightful</Typography>
          <Typography variant="h3">Gestures and Animations</Typography>
          <Box marginTop={2} marginBottom={2}>
            <Typography>
              Learn to leverage the power of declarative gestures and animations
              in React Native to build user experiences that run at 60 fps, even
              on low-end devices.
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
        aria-labelledby="Learn React Native Declarative Gestures and Animations"
        maxWidth={false}
        {...{ open }}
      >
        <YouTubePlayer id="kq19l1avxq" playing={open} />
      </Dialog>
      <Box marginBottom={2}>
        <BorderedBox padding={2}>
          <Typography style={{ fontWeight: 500 }}>
            Reanimated 2 alpha is out.
          </Typography>
          <Typography>
            <Link to={Routes.REANIMATED2}>Learn about the new API.</Link>
          </Typography>
        </BorderedBox>
      </Box>
      <Lessons course="gestures-and-animations-2" />
      <Lessons course="gestures-and-animations" />
      <Box marginBottom={2}>
        <BorderedBox padding={2}>
          <Typography style={{ fontWeight: 500 }}>Looking for more?</Typography>
          <Typography>
            <Link to={Routes.REANIMATED2}>Learn about Reanimated 2.</Link>
          </Typography>
        </BorderedBox>
      </Box>
    </Container>
  );
};
