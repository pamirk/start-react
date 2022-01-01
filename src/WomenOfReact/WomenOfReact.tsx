/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from "react";
import { Box, Link, Typography } from "@material-ui/core";
import Love from "@material-ui/icons/Favorite";

import { Redirect } from "react-router-dom";
import { withProtection } from "../components/AuthContext";
import { Button, Routes, SplitContainer } from "../components";
import Illustration from "./Illustration";

import { applyWomenOfReactCoupon } from "../components/API";

export default withProtection(() => {
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const applyCoupon = async () => {
    setLoading(true);
    try {
      await applyWomenOfReactCoupon();
      setDone(true);
    } catch (e) {
      setError(true);
    }
    setLoading(false);
  };
  if (done) {
    return <Redirect to={Routes.ACCOUNT} />;
  }
  // const classes = useStyles();
  return (
    <SplitContainer>
      <div>
        <Typography variant="h4" gutterBottom>
          Hello YouTube Friend 👋🏽
        </Typography>
        <Typography gutterBottom>
          Please enjoy this 50% coupon to any subscription on Start React
          Native. Simply push the button below to apply the discount and, it
          will automatically appear in your next checkout.
        </Typography>
        <br />
        <Button
          onClick={applyCoupon}
          color="primary"
          type="submit"
          disabled={done || error}
          {...{ loading }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="auto"
          >
            <Box display="flex" marginRight={1}>
              <Love />
            </Box>
            <Typography style={{ fontWeight: 500 }}>Apply Coupon</Typography>
          </Box>
        </Button>
        {error && (
          <>
            <br />
            <br />
            <Typography color="error">
              An error happened while applying the coupon. Please contact us{" "}
              <Link href="mailto:wcandillon@gmail.com">by email</Link>
              {" and we will fix the situation. Sorry for the inconvenience"}
            </Typography>
          </>
        )}
      </div>
      <Illustration />
    </SplitContainer>
  );
});
