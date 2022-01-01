/* eslint-disable @typescript-eslint/camelcase */
/* global Stripe:readonly */
import React, { useEffect, useState } from "react";

import { Button, loadStripe, stripeApiKey } from "../components";
import { createSetupSession, getPaymentMethods } from "../components/API";

import ErrorDialog from "./ErrorDialog";
import Row from "./Row";
// import { StripePaymentMethod } from "../components/Model";

export default ({
  defaultPaymentMethodId
}: {
  defaultPaymentMethodId: string;
}) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [defaultPaymentMethod, setDefaultPaymentMethod] = useState(
    "************"
  );
  const updateBillingInforation = async () => {
    setLoading(true);
    try {
      await loadStripe();
      // @ts-ignore
        const stripe = Stripe(stripeApiKey);
      const session = await createSetupSession();
      await stripe.redirectToCheckout({ sessionId: session.id });
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    (async () => {
      const paymentMethods = await getPaymentMethods();
      const paymentMethod = paymentMethods.data.filter(
        (p: any) => p.id === defaultPaymentMethodId
      )[0] as any;
      const { card } = paymentMethod;
      if (card) {
        const { brand, last4, exp_month, exp_year } = card;
        setDefaultPaymentMethod(
          `************${last4} (${brand.charAt(0).toUpperCase() +
            brand.slice(1)}) Expires: ${`${exp_month}`.padStart(
            2,
            "0"
          )}/${exp_year}`
        );
      }
    })();
  }, [defaultPaymentMethodId]);
  return (
    <>
      <Row label="Payment Method" text={defaultPaymentMethod}>
        <Button onClick={updateBillingInforation} {...{ loading }}>
          Update Payment Method
        </Button>
      </Row>
      <ErrorDialog open={error} onClose={() => setError(false)} />
    </>
  );
};
