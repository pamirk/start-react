import React, { useState } from "react";
import { Box, TextField, Typography, makeStyles } from "@material-ui/core";

import { Button } from "../components";

const isEmailValid = (email: string): boolean => {
  // eslint-disable-next-line max-len
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const useStyles = makeStyles(() => ({
  form: {
    display: "flex",
    flexDirection: "column"
  }
}));

interface EmailProps {
  onSubmit: (email: string) => void;
}

export default ({ onSubmit }: EmailProps) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  return (
    <form
      className={classes.form}
      onSubmit={e => {
        onSubmit(email);
        e.preventDefault();
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        {"What is your email?"}
      </Typography>
      <Typography align="center" gutterBottom>
        Please enter the email with which you signed-in into Start React Native.
      </Typography>
      <TextField
        id="email"
        type="email"
        name="email"
        autoComplete="email"
        variant="outlined"
        placeholder="Email"
        inputProps={{ "aria-label": "email" }}
        onChange={({ target: { value } }) => setEmail(value)}
      />
      <Box marginTop={1}>
        <Button
          color="primary"
          type="submit"
          onClick={() => onSubmit(email)}
          fullWidth
          disabled={!isEmailValid(email)}
        >
          Sign-in
        </Button>
      </Box>
    </form>
  );
};
