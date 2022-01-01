/* eslint-disable jsx-a11y/accessible-emoji */
import * as firebase from "firebase/app";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Box, TextField, Typography, makeStyles } from "@material-ui/core";
import { Redirect } from "react-router-dom";

import { SIGN_IN_EMAIL_KEY, withUnprotection } from "../components/AuthContext";
import { Animations, Button, Routes, SplitContainer } from "../components";

import Illustration from "../WomenOfReact/Illustration";

const onChange = (set: Dispatch<SetStateAction<string>>) => ({
  target: { value }
}: {
  target: { value: string };
}) => set(value);

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    flexDirection: "column"
  },
  link: {
    color: theme.palette.primary.main
  }
}));

export default withUnprotection(() => {
  const isFromWomenOfReact =
    window.location.search === `?r=${Routes.YOUTUBE_FRIENDS}`;
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState("");
  const submit = async () => {
    setError("");
    setLoading(true);
    try {
      await firebase.auth().sendSignInLinkToEmail(email, {
        url: `${window.location.origin}${Routes.AUTH}${window.location.search}`,
        handleCodeInApp: true
      });
      localStorage.setItem(SIGN_IN_EMAIL_KEY, email);
      setEmailSent(true);
    } catch (e) {
      setError(e && e.message ? e.message : "An error happened");
      setLoading(false);
    }
  };
  if (emailSent) {
    return <Redirect to={Routes.EMAIL_SENT} />;
  }
  return (
    <SplitContainer>
      <form
        className={classes.form}
        onSubmit={e => {
          submit();
          e.preventDefault();
        }}
      >
        {isFromWomenOfReact && (
          <>
            <Typography variant="h4" gutterBottom>
              Hello YouTube Friend 👋🏽
            </Typography>
            <Typography gutterBottom>
              We would like to offer you a 50% coupon. Enter your email. We’ll
              send you a link to sign in to your account and, from there, you
              will be able to redeem this awesome coupon.
            </Typography>
          </>
        )}
        {!isFromWomenOfReact && (
          <>
            <Typography variant="h4" align="center" gutterBottom>
              {"Sign In to Start\u00A0React\u00A0Native"}
            </Typography>
            <Typography align="center">
              Enter your email. We’ll send you a link to sign in to your
              account.
            </Typography>
            <Typography align="center" gutterBottom>
              If you don't have an account yet, we will create one for you.
            </Typography>
          </>
        )}
        <TextField
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          variant="outlined"
          placeholder="Email"
          inputProps={{ "aria-label": "email" }}
          onChange={onChange(setEmail)}
          disabled={loading}
        />
        <Box marginTop={1}>
          <Button color="primary" onClick={submit} fullWidth {...{ loading }}>
            Sign In
          </Button>
        </Box>
        <Box marginTop={1}>
          <Typography color="error">
            {error}
            {"\u00A0"}
          </Typography>
        </Box>
      </form>
      {isFromWomenOfReact && <Illustration />}
      {!isFromWomenOfReact && <Animations contrast />}
    </SplitContainer>
  );
});
