// eslint-disable-next-line import/no-unresolved
import React, { useContext, useState } from "react";
import { Typography } from "@material-ui/core";
import { AuthContext, Button, Snackbar, formatDate } from "../components";
import { StripeSubscription } from "../components/Model";
import {
  cancelSubscription,
  enableSubscription,
  getUser
} from "../components/API";
import Row from "./Row";
import PayOutstandingInvoice from "./PayOutstandingInvoice";
import UpdateBillingInformation from "./UpdateBillingInformation";

interface ManageSubscriptionProps {
  subscription: StripeSubscription;
}

export default ({ subscription }: ManageSubscriptionProps) => {
  const [, dispatchUser] = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const toggleSubscription = async () => {
    setLoading(true);
    try {
      if (!subscription.cancel_at_period_end) {
        // TODO: the subscription id is not needed as parameter
        // not sending the subscription will help with deleting checkAuth() in favor of getAuth() in the backend
        await cancelSubscription({
          subscription: subscription.id
        });
      } else {
        await enableSubscription({
          subscription: subscription.id
        });
      }
    } catch (e) {
      setError(true);
    }
    const user = await getUser();
    dispatchUser(user);
    setLoading(false);
  };
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Manage Your Subscription
      </Typography>
      {subscription.status === "past_due" && <PayOutstandingInvoice />}
      {subscription.status === "incomplete" && (
        <p>
          Stripe couldn't charge your card and will retry in the next few days.
          Alternatively, you can update your payment method below.
        </p>
      )}
      {subscription.status === "active" && (
        <Row
          label={
            subscription.cancel_at_period_end
              ? "Subscription Ends On"
              : "Subscription Renews On"
          }
          text={formatDate(subscription.current_period_end)}
        >
          <Button onClick={toggleSubscription} {...{ loading }}>
            {!subscription.cancel_at_period_end
              ? "Disable automatic renewal"
              : "Enable automatic renewal"}
          </Button>
        </Row>
      )}
      {typeof subscription.default_payment_method === "string" && (
        <UpdateBillingInformation
          defaultPaymentMethodId={subscription.default_payment_method}
        />
      )}
      <Snackbar
        open={error}
        onClose={() => setError(false)}
        message="An unexpected error happened"
      />
    </>
  );
};
