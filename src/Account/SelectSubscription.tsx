/* global Stripe:readonly */
import React, { memo, useState } from "react";
import { Box, Typography, makeStyles, useTheme } from "@material-ui/core";
import { Subscription as SubscriptionModel } from "../components/Constants";

import {
  BorderedBox,
  Button,
  createSession,
  formatPrice,
  loadStripe,
  stripeApiKey,
  subscriptions
} from "../components";

import ErrorDialog from "./ErrorDialog";

interface SubscriptionProps {
  subscription: SubscriptionModel;
}

const stars = {
  monthly: "",
  annual: "*",
  lifetime: ""
};

const useStyles = makeStyles(theme => ({
  header: {
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius
  },
  perMonth: {
    marginLeft: theme.spacing()
  }
}));

const Subscription = memo(({ subscription }: SubscriptionProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const theme = useTheme();
  const classes = useStyles();
  const bgcolor = subscription.mostPopular
    ? theme.palette.primary.main
    : theme.palette.grey[100];
  const color = subscription.mostPopular
    ? theme.palette.common.white
    : theme.palette.common.black;
  const onClick = async () => {
    setLoading(true);
    try {
      await loadStripe();
      // @ts-ignore
      const stripe = Stripe(stripeApiKey);
      const session = await createSession({
        type: subscription.type,
        plan: subscription.id
      });
      await stripe.redirectToCheckout({ sessionId: session.id });
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  };
  return (
    <>
      <BorderedBox>
        <Box
          className={classes.header}
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding={2}
          minWidth={175}
          {...{ bgcolor, color }}
        >
          <Typography variant="h6" color="inherit">
            {subscription.label}
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding={2}
          paddingTop={4}
        >
          <Typography variant="h5">
            {formatPrice(subscription.price)}
          </Typography>
          <Typography variant="subtitle1" className={classes.perMonth}>
            {subscription.type !== "lifetime" &&
              `/mo${stars[subscription.type]}`}
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding={2}
        >
          <Button
            color={subscription.mostPopular ? "primary" : "default"}
            {...{ onClick, loading }}
          >
            {subscription.type === "lifetime" ? "Buy now" : "Subscribe now"}
          </Button>
        </Box>
      </BorderedBox>
      <ErrorDialog open={error} onClose={() => setError(false)} />
    </>
  );
});

export default memo(() => (
  <>
    <Typography variant="h5" gutterBottom>
      Unlock the full Start React Native Experience.
    </Typography>
    <Typography gutterBottom>
      The subscription includes all future updates on the course, as well as the
      premium starter kits and new lessons that will be available in the future.
    </Typography>
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent={{ sm: "flex-start" }}
      flex={1}
    >
      {subscriptions.map(subscription => (
        <Box marginRight={2} marginTop={2} key={subscription.id}>
          <Subscription {...{ subscription }} />
        </Box>
      ))}
    </Box>
    <Box marginTop={1}>
      <Typography variant="caption">
        * Billed as one payment. Subscription renews automatically at the end
        its of term. You can turn off auto-renew from your settings.
      </Typography>
    </Box>
  </>
));
