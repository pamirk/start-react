import React, { useContext } from "react";
import { AppBar, Box, Container, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { AuthContext, UNAUTHENTICATED, UNDETERMINED } from "./AuthContext";
import { Routes } from "./Constants";
import ReactLogo from "./ReactLogo";
import Link from "./Link";
import Button from "./Button";
import Skeleton from "./Skeleton";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.common.black
        : theme.palette.common.white,
    borderBottom: "1px solid",
    borderBottomColor: theme.palette.divider
  }
}));

export default () => {
  const [user] = useContext(AuthContext);
  const classes = useStyles();
  return (
    <AppBar position="static" elevation={0} classes={{ root: classes.root }}>
      <Toolbar disableGutters>
        <Container>
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="start"
          >
            <Link to={Routes.HOME}>
              <Box display="flex" alignItems="center">
                <Box marginRight={1}>
                  <ReactLogo />
                </Box>
                <Typography variant="h6" color="primary">
                  business-news.live
                </Typography>
              </Box>
            </Link>
            <Box style={{marginLeft: 'auto', marginRight: 5}} minWidth={90}>
              <Button to={'/contact'} fullWidth>
                Contact us
              </Button>
            </Box>

            <Box style={{ marginRight: 5}} minWidth={90}>
              <Button to={'/about'} fullWidth>
                About us
              </Button>
            </Box>
            <Box style={{ marginRight: 5}} minWidth={90}>
              <Button to={'/progress'} fullWidth>
                Progress
              </Button>
            </Box>
            <Box style={{ marginRight: 5}} minWidth={90}>
              <Button to={'/faq'} fullWidth>
                FAQs
              </Button>
            </Box>
            <Box style={{ marginRight: 5}} minWidth={90}>
              <Button to={'/learning'} fullWidth>
                Learning
              </Button>
            </Box>
            <Box style={{ marginRight: 5}} minWidth={90}>
              <Button to={'/terms'} fullWidth>
                Terms
              </Button>
            </Box>
            <Box style={{ marginRight: 5}} minWidth={90}>
              <Button to={'/terms-intro'} fullWidth>
                Intro
              </Button>
            </Box>
            <Box style={{ marginRight: 5}} minWidth={90}>
              <Button to={'/terms-use'} fullWidth>
                Use
              </Button>
            </Box>
            <Box style={{ marginRight: 5}} minWidth={90}>
              <Button to={'/terms-registration'} fullWidth>
                Registration
              </Button>
            </Box>
           {/* <Box minWidth={90}>
              {user === UNDETERMINED && <Skeleton width={12} fullWidth />}
              {user === UNAUTHENTICATED && (
                <Button to={Routes.SIGN_IN} fullWidth>
                  Sign in
                </Button>
              )}
              {user && (
                <Button to={Routes.ACCOUNT} fullWidth>
                  Account
                </Button>
              )}
            </Box>*/}
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
