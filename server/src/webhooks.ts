import {stripe} from './';
import Stripe from 'stripe';
import {db} from './firebase';
import {firestore} from 'firebase-admin';

/**
 * Business logic for specific webhook event types
 */
const webhookHandlers = {
    'checkout.session.completed': async (data: Stripe.Event.Data) => {
        // Add your business logic here
    },
    'payment_intent.succeeded': async (data: Stripe.PaymentIntent) => {
        // Add your business logic here
        console.log("succeeded data", data)
        // @ts-ignore
        const d = {
            id: 'pi_1HP8jsCllsmSiDUz7ydBaDXC',
            object: 'payment_intent',
            amount: 199,
            amount_capturable: 0,
            amount_received: 199,
            application: null,
            application_fee_amount: null,
            canceled_at: null,
            cancellation_reason: null,
            capture_method: 'automatic',
            charges: {
                object: 'list',
                data: [[Object]],
                has_more: false,
                total_count: 1,
                url: '/v1/charges?payment_intent=pi_1HP8jsCllsmSiDUz7ydBaDXC'
            },
            client_secret: 'pi_1HP8jsCllsmSiDUz7ydBaDXC_secret_hiPGvnTzIpL0TKgfuWAS85T1J',
            confirmation_method: 'automatic',
            created: 1599578888,
            currency: 'usd',
            customer: 'cus_Hz6yZA0q6KfK5w',
            description: null,
            invoice: null,
            last_payment_error: null,
            livemode: false,
            metadata: {},
            next_action: null,
            on_behalf_of: null,
            payment_method: 'pm_1HP8kMCllsmSiDUzp02YdtwD',
            payment_method_options: {
                card: {
                    installments: null,
                    network: null,
                    request_three_d_secure: 'automatic'
                }
            },
            payment_method_types: ['card'],
            receipt_email: null,
            review: null,
            setup_future_usage: null,
            shipping: null,
            source: null,
            statement_descriptor: null,
            statement_descriptor_suffix: null,
            status: 'succeeded',
            transfer_data: null,
            transfer_group: null
        }

    },
    'payment_intent.payment_failed': async (data: Stripe.PaymentIntent) => {
        // Add your business logic here
    },
    'customer.subscription.deleted': async (data: Stripe.Subscription) => {
        const customer = await stripe.customers.retrieve(data.customer as string) as Stripe.Customer;
        const userId = customer.metadata.firebaseUID;
        const userRef = db.collection('users').doc(userId);

        await userRef.update({activePlans: firestore.FieldValue.arrayRemove(data.plan.id),});
    },
    'customer.subscription.created': async (data: Stripe.Subscription) => {
        const customer = await stripe.customers.retrieve(data.customer as string) as Stripe.Customer;
        const userId = customer.metadata.firebaseUID;
        const userRef = db.collection('users').doc(userId);

        await userRef
            .update({
                activePlans: firestore.FieldValue.arrayUnion(data.plan.id),
            });
    },
    'invoice.payment_succeeded': async (data: Stripe.Invoice) => {
        // Add your business logic here
    },
    'invoice.payment_failed': async (data: Stripe.Invoice) => {

        const customer = await stripe.customers.retrieve(data.customer as string) as Stripe.Customer;
        const userSnapshot = await db.collection('users').doc(customer.metadata.firebaseUID).get();
        await userSnapshot.ref.update({status: 'PAST_DUE'});
    }
}

/**
 * Validate the stripe webhook secret, then call the handler for the event type
 */
export const handleStripeWebhook = async (req, res) => {
    const sig = req.headers['stripe-signature'];
    const event = stripe.webhooks.constructEvent(req['rawBody'], sig, process.env.STRIPE_WEBHOOK_SECRET);

    try {
        await webhookHandlers[event.type](event.data.object);
        res.send({received: true});
    } catch (err) {
        console.error(err)
        res.status(400).send(`Webhook Error: ${err.message}`);
    }
}

